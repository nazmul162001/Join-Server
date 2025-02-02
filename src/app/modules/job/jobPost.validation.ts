import { z } from 'zod';

const employmentTypeEnum = z.enum([
  'FULL_TIME',
  'PART_TIME',
  'CONTRACT',
  'INTERNSHIP',
  'FREELANCE',
]);
const experienceLevelEnum = z.enum([
  'ENTRY',
  'MID',
  'SENIOR',
  'DIRECTOR',
  'EXECUTIVE',
]);
const salaryTypeEnum = z.enum([
  'HOURLY',
  'DAILY',
  'WEEKLY',
  'MONTHLY',
  'YEARLY',
]);
const countryEnum = z.enum([
  'UNITED_STATES',
  'CANADA',
  'UNITED_KINGDOM',
  'AUSTRALIA',
  'GERMANY',
  'FRANCE',
  'NETHERLANDS',
  'SWEDEN',
  'NORWAY',
  'DENMARK',
  'FINLAND',
  'SWITZERLAND',
  'IRELAND',
  'BELGIUM',
  'SPAIN',
  'ITALY',
  'POLAND',
  'CZECH_REPUBLIC',
  'AUSTRIA',
  'PORTUGAL',
  'SINGAPORE',
  'HONG_KONG',
  'JAPAN',
  'SOUTH_KOREA',
  'CHINA',
  'TAIWAN',
  'INDIA',
  'BANGLADESH',
  'PAKISTAN',
  'MALAYSIA',
  'INDONESIA',
  'VIETNAM',
  'THAILAND',
  'PHILIPPINES',
  'BRAZIL',
  'ARGENTINA',
  'CHILE',
  'MEXICO',
  'COLOMBIA',
  'SOUTH_AFRICA',
  'EGYPT',
  'UNITED_ARAB_EMIRATES',
  'SAUDI_ARABIA',
  'QATAR',
  'TURKEY',
  'UKRAINE',
  'ROMANIA',
  'BULGARIA',
  'RUSSIA',
  'ISRAEL',
  'NEW_ZEALAND',
]);

const currencyEnum = z.enum(['USD', 'EUR', 'GBP', 'INR', 'BDT']); // Add more as needed
const jobStatusEnum = z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']);
const jobTypeEnum = z.enum(['REMOTE', 'ONSITE', 'HYBRID']); // New jobType field

const jobPostValidationSchema = z.object({
  body: z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    responsibilities: z
      .string()
      .min(10, 'Responsibilities must be at least 10 characters'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters'),
    country: countryEnum,
    city: z.string().min(2, 'City is required'),
    education: z.string().min(2, 'Education is required'),
    applicationContact: z.string().email('Invalid email format'),
    benefits: z.string().optional(),
    category: z.string(),
    minSalary: z.number().nonnegative('Minimum salary cannot be negative'),
    maxSalary: z.number().nonnegative('Maximum salary cannot be negative'),
    skill: z.string(),
    duration: z.string(),
    perks: z.string().optional(),
    coverLetter: z.string().optional(),
    availability: z.string(),
    assessment: z.string().optional(),
    vacancy: z.number().int().positive('Vacancy must be at least 1'),
    location: z.string(),
    employmentType: employmentTypeEnum,
    experienceLevel: experienceLevelEnum,
    salary: z.number().optional(),
    salaryType: salaryTypeEnum.optional(),
    currency: currencyEnum.optional(),
    status: jobStatusEnum.default('ACTIVE'),
    jobType: jobTypeEnum, // New jobType field added here
    remote: z.boolean().default(false),
    companyName: z.string(),
    postedAt: z.date().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    applications: z.array(z.object({})).optional(), // Modify based on actual application structure
  }),
});

export const JobPostValidation = {
  jobPostValidationSchema,
};
