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
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "name" TEXT NOT NULL DEFAULT '',
    "profileImage" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateProfile" (
    "id" TEXT NOT NULL,
    "profileCompletion" INTEGER NOT NULL DEFAULT 0,
    "name" TEXT,
    "location" TEXT,
    "primaryRole" TEXT,
    "yearsOfExperience" INTEGER,
    "openToRoles" TEXT[],
    "bio" TEXT,
    "website" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "twitter" TEXT,
    "resume" TEXT,
    "skills" TEXT[],
    "achievements" TEXT,
    "pronouns" TEXT,
    "genderIdentity" TEXT,
    "ethnicity" TEXT[],
    "candidateId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CandidateProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SendTask" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "SendTask_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recommendation" (
    "id" TEXT NOT NULL,
    "recommendedBy" TEXT NOT NULL,
    "message" TEXT,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateHistory" (
    "id" TEXT NOT NULL,
    "actionType" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "CandidateHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CandidateEducation" (
    "id" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "fieldOfStudy" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "grade" TEXT,
    "description" TEXT,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "CandidateEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "description" TEXT,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalendarEvent" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "meetingLink" TEXT,
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "CalendarEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preferences" (
    "id" TEXT NOT NULL,
    "areasOfInterest" TEXT[],
    "careerInterests" TEXT[],
    "currentlyLookingFor" TEXT[],
    "workModes" TEXT[],
    "jobType" TEXT[],
    "preferredIndustries" TEXT[],
    "preferredLocations" TEXT[],
    "salaryExpectationRange" TEXT,
    "openToRelocation" BOOLEAN NOT NULL,
    "remoteWorkPreference" BOOLEAN NOT NULL,
    "companySizePreference" TEXT[],
    "employmentLevel" TEXT[],
    "desiredJobTitles" TEXT[],
    "skillImprovementAreas" TEXT[],
    "preferredWorkEnvironment" TEXT,
    "availableStartDate" TIMESTAMP(3),
    "preferredLanguages" TEXT[],
    "candidateId" TEXT NOT NULL,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "perks" TEXT,
    "coverLetter" TEXT,
    "availability" TEXT NOT NULL,
    "assessment" TEXT,
    "vacancy" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "employmentType" "EmploymentType" NOT NULL,
    "experienceLevel" "ExperienceLevel" NOT NULL,
    "salary" INTEGER,
    "salaryType" "SalaryType",
    "currency" "CurrencyType",
    "status" "JobStatus" NOT NULL DEFAULT 'ACTIVE',
    "remote" BOOLEAN NOT NULL DEFAULT false,
    "companyName" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_posts_pkey" PRIMARY KEY ("id")
);

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
    "candidateId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "apply_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "hdChannel" TEXT NOT NULL,
    "connectionCost" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "CandidateProfile" ADD CONSTRAINT "CandidateProfile_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SendTask" ADD CONSTRAINT "SendTask_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recommendation" ADD CONSTRAINT "Recommendation_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateHistory" ADD CONSTRAINT "CandidateHistory_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CandidateEducation" ADD CONSTRAINT "CandidateEducation_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendarEvent" ADD CONSTRAINT "CalendarEvent_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_jobPostId_fkey" FOREIGN KEY ("jobPostId") REFERENCES "job_posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "apply_jobs" ADD CONSTRAINT "apply_jobs_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "CandidateProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
