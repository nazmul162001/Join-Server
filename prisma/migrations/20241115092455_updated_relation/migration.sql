-- DropForeignKey
ALTER TABLE "job_posts" DROP CONSTRAINT "job_posts_createdById_fkey";

-- AlterTable
ALTER TABLE "job_posts" ALTER COLUMN "createdById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
