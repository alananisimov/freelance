-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "createdById" TEXT NOT NULL,
    CONSTRAINT "Post_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Data" (
    "current_bonus" REAL NOT NULL DEFAULT 154.4,
    "bonus_end_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tokens_allocate_public" INTEGER NOT NULL DEFAULT 45,
    "tokens_allocate_private" INTEGER NOT NULL DEFAULT 25,
    "team_and_founder" INTEGER NOT NULL DEFAULT 45,
    "advisors_and_partners" INTEGER NOT NULL DEFAULT 4,
    "bounty_and_events" INTEGER NOT NULL DEFAULT 45,
    "reserve_fund" INTEGER NOT NULL DEFAULT 45,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "token_symbol" TEXT NOT NULL DEFAULT 'QTT',
    "token_offered" REAL NOT NULL DEFAULT 15.0,
    "hard_cap" REAL NOT NULL DEFAULT 12.0,
    "soft_cap" REAL NOT NULL DEFAULT 2.0,
    "crowdsale_1" REAL NOT NULL DEFAULT 1.5,
    "crowdsale_2" REAL NOT NULL DEFAULT 2.5
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Data_current_bonus_bonus_end_time_tokens_allocate_public_tokens_allocate_private_team_and_founder_advisors_and_partners_bounty_and_events_reserve_fund_start_time_end_time_token_symbol_token_offered_hard_cap_soft_cap_crowdsale_1_crowdsale_2_key" ON "Data"("current_bonus", "bonus_end_time", "tokens_allocate_public", "tokens_allocate_private", "team_and_founder", "advisors_and_partners", "bounty_and_events", "reserve_fund", "start_time", "end_time", "token_symbol", "token_offered", "hard_cap", "soft_cap", "crowdsale_1", "crowdsale_2");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
