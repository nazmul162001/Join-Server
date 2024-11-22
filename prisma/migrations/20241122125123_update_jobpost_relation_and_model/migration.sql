/*
  Warnings:

  - You are about to drop the column `postedBy` on the `job_posts` table. All the data in the column will be lost.
  - You are about to drop the column `userDataId` on the `job_posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "job_posts" DROP COLUMN "postedBy",
DROP COLUMN "userDataId";
