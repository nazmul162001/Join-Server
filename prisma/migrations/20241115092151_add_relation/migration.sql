/*
  Warnings:

  - Added the required column `createdById` to the `job_posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_externalId_key";

-- AlterTable
ALTER TABLE "job_posts" ADD COLUMN     "createdById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
