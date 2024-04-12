#!/bin/bash

# Проверяем установлен ли nvm и добавляем его в .bashrc и .zshrc
if ! [ -x "$(command -v nvm)" ]; then
  echo "nvm is not installed. Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
  nvm install --lts

  # Добавляем источник nvm в .bashrc и .zshrc, если он еще не добавлен
  if [ -d "$HOME/.nvm" ]; then
    if [ -f "$HOME/.bashrc" ]; then
      if ! grep -q "source $HOME/.nvm/nvm.sh" "$HOME/.bashrc"; then
        echo 'source $HOME/.nvm/nvm.sh' >> "$HOME/.bashrc"
      fi
    fi

    if [ -f "$HOME/.zshrc" ]; then
      if ! grep -q "source $HOME/.nvm/nvm.sh" "$HOME/.zshrc"; then
        echo 'source $HOME/.nvm/nvm.sh' >> "$HOME/.zshrc"
      fi
    fi
  fi
fi
if ! [ -x "$(command -v pm2)" ]; then
  echo "pm2 is not installed. Installing pm2..."
  npm i -g pm2
fi
# Устанавливаем nginx, если он еще не установлен
if ! [ -x "$(command -v nginx)" ]; then
  echo "Nginx is not installed. Installing Nginx..."
  sudo apt update
  sudo apt install nginx
fi

# Устанавливаем acme.sh, если он еще не установлен
if ! [ -x "$(command -v acme.sh)" ]; then
  echo "acme.sh is not installed. Installing acme.sh..."
  curl https://get.acme.sh | sh
fi

# Получаем доменное имя от пользователя
read -p "Enter your domain name (e.g., example.com): " domain_name

# Создаем директорию для SSL сертификата, если она не существует
sudo mkdir -p /etc/nginx/ssl/

# Получаем SSL сертификат
echo "Getting SSL certificate for $domain_name..."
~/.acme.sh/acme.sh --issue -d "$domain_name" --webroot /var/www/html

# Устанавливаем SSL сертификат в Nginx
echo "Installing SSL certificate into Nginx..."
~/.acme.sh/acme.sh --install-cert -d "$domain_name" \
  --key-file /etc/nginx/ssl/$domain_name.key \
  --fullchain-file /etc/nginx/ssl/fullchain.cer \
  --reloadcmd "sudo systemctl reload nginx"

# Конфигурируем Nginx
echo "Configuring Nginx..."
sudo tee /etc/nginx/sites-enabled/default >/dev/null <<EOF
server {
    server_name $domain_name;
    access_log /var/log/dicom-interactive/access.log;
    error_log /var/log/dicom-interactive/error.log error;

    location _next/ {
        alias /srv/udemii-fe/.next/;
        expires 30d;
        access_log on;
    }

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/fullchain.cer;
    ssl_certificate_key /etc/nginx/ssl/$domain_name.key;
}

server {
    if (\$host = www.$domain_name) {
        return 301 https://\$host\$request_uri;
    }

    if (\$host = $domain_name) {
        return 301 https://\$host\$request_uri;
    }

    listen 80;
    server_name $domain_name www.$domain_name;

    location / {
        return 404;
    }
}
EOF

# Перезапускаем Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

# Устанавливаем зависимости проекта
echo "Installing dependencies..."
npm install

# Собираем проект
echo "Building project..."
npm run build

# Запускаем Next.js с помощью PM2 на порту 8080
echo "Starting Next.js with PM2..."
pm2 start "npx next start -p 8080" --name nextjs

echo "Site successfully runned on port 8080"

# Перезапускаем Nginx
echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "Nginx successfully restarted"
