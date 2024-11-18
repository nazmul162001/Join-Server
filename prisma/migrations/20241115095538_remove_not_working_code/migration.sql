/*
  Warnings:

  - You are about to drop the column `createdById` on the `job_posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "job_posts" DROP CONSTRAINT "job_posts_createdById_fkey";

-- AlterTable
ALTER TABLE "job_posts" DROP COLUMN "createdById";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "externalId" DROP NOT NULL;
