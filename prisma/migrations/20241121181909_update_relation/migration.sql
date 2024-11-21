/*
  Warnings:

  - You are about to drop the column `userId` on the `apply_jobs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "apply_jobs" DROP CONSTRAINT "apply_jobs_userId_fkey";

-- AlterTable
ALTER TABLE "apply_jobs" DROP COLUMN "userId";
