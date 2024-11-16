-- CreateTable
CREATE TABLE "apply_jobs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "coverLetter" TEXT NOT NULL,
    "jobPostId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "apply_jobs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_jobPostId_fkey" FOREIGN KEY ("jobPostId") REFERENCES "job_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
