/*
  Warnings:

  - Added the required column `name` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cards" ADD COLUMN     "name" TEXT NOT NULL;
