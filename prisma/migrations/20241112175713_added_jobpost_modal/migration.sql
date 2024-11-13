-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'CLOSED');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'INTERNSHIP', 'FREELANCE');

-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('JUNIOR', 'MID', 'SENIOR', 'LEAD', 'EXECUTIVE');

-- CreateEnum
CREATE TYPE "SalaryType" AS ENUM ('HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL');

-- CreateEnum
CREATE TYPE "CurrencyType" AS ENUM ('USD', 'BDT', 'INR');

-- CreateTable
CREATE TABLE "job_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "perks" TEXT NOT NULL,
    "coverLetter" TEXT,
    "availability" TEXT NOT NULL,
    "assessment" TEXT NOT NULL,
    "vacancy" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "employmentType" "EmploymentType" NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "salary" INTEGER,
    "salaryType" "SalaryType",
    "currency" "CurrencyType",
    "postedBy" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'ACTIVE',
    "remote" BOOLEAN NOT NULL DEFAULT false,
    "companyName" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_posts_pkey" PRIMARY KEY ("id")
);
