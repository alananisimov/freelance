#!/bin/bash

echo "🚀 Начинаем сборку Next.js приложения..."
npm install
npm run build

echo "🚀 Запускаем Next.js приложение в продакшн режиме..."
npm start
