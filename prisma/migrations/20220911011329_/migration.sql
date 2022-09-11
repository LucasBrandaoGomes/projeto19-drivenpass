/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `Credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Credentials_userId_title_key" ON "Credentials"("userId", "title");
