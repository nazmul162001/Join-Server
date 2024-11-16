/*
  Warnings:

  - You are about to drop the column `externalId` on the `users` table. All the data in the column will be lost.
  - Added the required column `userDataId` to the `job_posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "job_posts" ADD COLUMN     "userDataId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "externalId";

-- AddForeignKey
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
