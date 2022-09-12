-- CreateEnum
CREATE TYPE "DocType" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "type" "DocType" NOT NULL,
    "number" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "issuingBody" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Documents_type_userId_key" ON "Documents"("type", "userId");

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
