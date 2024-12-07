// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// generator client {
//     provider = "prisma-client-js"
//   }

//   datasource db {
//     provider = "postgresql"
//     url      = env("DATABASE_URL")
//     // directUrl = env("DIRECT_URL")
//   }

//   model User {
//     id               String            @id @default(uuid())
//     email            String            @unique
//     password         String
//     role             String           @default("user")
//     name             String           @default("")
//     profileImage     String           @default("")
//     phoneNumber      String           @default("")
//     profile     CandidateProfile[]

//     @@map("users")
//   }

//   model CandidateProfile {
//     id                 String   @id @default(uuid())
//     profileCompletion  Int      @default(0)
//     name               String?
//     location           String?
//     primaryRole        String?
//     yearsOfExperience  Int?
//     openToRoles        String[]
//     bio                String?
//     website            String?
//     linkedin           String?
//     github             String?
//     twitter            String?
//     resume             String?
//     skills             String[]
//     achievements       String?
//     pronouns           String?
//     genderIdentity     String?
//     ethnicity          String[]
//     tasks              SendTask[]
//     recommendations    Recommendation[]
//     history            CandidateHistory[]
//     education          CandidateEducation[]
//     workExperience     WorkExperience[]
//     calendarEvents     CalendarEvent[]
//     applications       ApplyJob[]
//     preferences        Preferences[]

//     candidateId  String
//     candidate    User @relation(fields: [candidateId], references: [id])

//     createdAt          DateTime @default(now())
//     updatedAt          DateTime @updatedAt
//   }

//   model SendTask {
//     id          String   @id @default(uuid())
//     title       String
//     description String?
//     dueDate     DateTime?
//     status      String
//     candidateId String
//     candidate   CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model Recommendation {
//     id          String   @id @default(uuid())
//     recommendedBy String
//     message      String?
//     candidateId  String
//     candidate    CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model CandidateHistory {
//     id          String   @id @default(uuid())
//     actionType  String
//     details     String
//     createdAt   DateTime @default(now())
//     candidateId String
//     candidate   CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model CandidateEducation {
//     id          String   @id @default(uuid())
//     schoolName  String
//     degree      String
//     fieldOfStudy String
//     startDate   DateTime
//     endDate     DateTime
//     grade       String?
//     description String?
//     candidateId String
//     candidate   CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model WorkExperience {
//     id          String   @id @default(uuid())
//     companyName String
//     title       String
//     startDate   DateTime
//     endDate     DateTime?
//     description String?
//     candidateId String
//     candidate   CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model CalendarEvent {
//     id          String   @id @default(uuid())
//     title       String
//     description String?
//     date        DateTime
//     meetingLink String?
//     candidateId String
//     candidate   CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model Preferences {
//     id                     String   @id @default(uuid())
//     areasOfInterest        String[]
//     careerInterests        String[]
//     currentlyLookingFor    String[]
//     workModes              String[]
//     jobType                String[]
//     preferredIndustries    String[]
//     preferredLocations     String[]
//     salaryExpectationRange String?
//     openToRelocation       Boolean
//     remoteWorkPreference   Boolean
//     companySizePreference  String[]
//     employmentLevel        String[]
//     desiredJobTitles       String[]
//     skillImprovementAreas  String[]
//     preferredWorkEnvironment String?
//     availableStartDate     DateTime?
//     preferredLanguages     String[]
//     candidateId            String
//     candidate              CandidateProfile @relation(fields: [candidateId], references: [id])
//   }

//   model JobPost {
//     id                String       @id @default(uuid())
//     title             String
//     responsibilities  String       @db.Text
//     category          String
//     skill             String       @db.Text
//     duration          String       @db.Text
//     perks             String?      @db.Text
//     coverLetter       String?
//     availability      String
//     assessment        String?      @db.Text
//     vacancy           Int
//     location          String
//     employmentType    EmploymentType
//     experienceLevel   ExperienceLevel
//     salary            Int?
//     salaryType        SalaryType?
//     currency          CurrencyType?
//     status            JobStatus    @default(ACTIVE)
//     remote            Boolean      @default(false)
//     companyName       String
//     postedAt          DateTime     @default(now())
//     createdAt         DateTime     @default(now())
//     updatedAt         DateTime     @updatedAt

//     applications      ApplyJob[]

//     @@map("job_posts")
//   }

//   model ApplyJob {
//     id           String   @id @default(uuid())
//     name         String
//     email        String
//     phone        String
//     linkedin     String
//     github       String
//     portfolio    String
//     coverLetter  String   @db.Text

//     jobPost      JobPost  @relation(fields: [jobPostId], references: [id])
//     jobPostId    String

//     candidate    CandidateProfile?     @relation(fields: [candidateId], references: [id])
//     candidateId       String?

//     createdAt    DateTime @default(now())
//     updatedAt    DateTime @default(now()) @updatedAt

//     @@map("apply_jobs")
//   }

//   model Service {
//     id   String  @id @default(uuid())
//     name String
//     price Int
//     category String
//     images String
//     district String
//     location String
//     description String
//     channel String
//     hdChannel String
//     connectionCost Int
//     status String

//     @@map("services")
//   }

//   // Enum for job status
//   enum JobStatus {
//     ACTIVE
//     INACTIVE
//     CLOSED
//   }

//   // Enum for employment type
//   enum EmploymentType {
//     FULL_TIME
//     PART_TIME
//     CONTRACT
//     TEMPORARY
//     INTERNSHIP
//     FREELANCE
//   }

//   // Enum for experience level
//   enum ExperienceLevel {
//     JUNIOR
//     MID
//     SENIOR
//     LEAD
//     EXECUTIVE
//   }

//   // Enum for salary type
//   enum SalaryType {
//     HOURLY
//     DAILY
//     WEEKLY
//     MONTHLY
//     ANNUAL
//   }

//   // Enum for salary type
//   enum CurrencyType {
//     USD
//     BDT
//     INR
//   }
