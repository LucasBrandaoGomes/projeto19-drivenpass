/*
  Warnings:

  - You are about to alter the column `number` on the `Cards` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(16)`.
  - You are about to alter the column `securityCode` on the `Cards` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(3)`.
  - A unique constraint covering the columns `[title,userId]` on the table `Cards` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Cards" ALTER COLUMN "number" SET DATA TYPE VARCHAR(16),
ALTER COLUMN "securityCode" SET DATA TYPE VARCHAR(3),
ALTER COLUMN "isVirtual" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Cards_title_userId_key" ON "Cards"("title", "userId");
