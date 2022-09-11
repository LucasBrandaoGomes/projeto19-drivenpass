/*
  Warnings:

  - A unique constraint covering the columns `[title,userId]` on the table `Wifis` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Wifis_title_userId_key" ON "Wifis"("title", "userId");
