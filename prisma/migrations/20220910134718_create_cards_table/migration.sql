-- CreateEnum
CREATE TYPE "Type" AS ENUM ('debit', 'credit', 'debitAndCredit');

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "cardType" "Type" NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
