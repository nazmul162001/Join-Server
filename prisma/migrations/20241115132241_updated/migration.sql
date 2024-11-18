-- DropForeignKey
ALTER TABLE "job_posts" DROP CONSTRAINT "job_posts_userDataId_fkey";

-- AlterTable
ALTER TABLE "job_posts" ALTER COLUMN "userDataId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "job_posts" ADD CONSTRAINT "job_posts_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
