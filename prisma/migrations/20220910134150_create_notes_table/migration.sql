-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
