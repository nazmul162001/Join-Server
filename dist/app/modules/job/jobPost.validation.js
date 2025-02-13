"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostValidation = void 0;
const zod_1 = require("zod");
const employmentTypeEnum = zod_1.z.enum([
    'FULL_TIME',
    'PART_TIME',
    'CONTRACT',
    'INTERNSHIP',
    'FREELANCE',
]);
const experienceLevelEnum = zod_1.z.enum([
    'ENTRY',
    'MID',
    'SENIOR',
    'DIRECTOR',
    'EXECUTIVE',
]);
const salaryTypeEnum = zod_1.z.enum([
    'HOURLY',
    'DAILY',
    'WEEKLY',
    'MONTHLY',
    'YEARLY',
]);
const countryEnum = zod_1.z.enum([
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
const currencyEnum = zod_1.z.enum(['USD', 'EUR', 'GBP', 'INR', 'BDT']); // Add more as needed
const jobStatusEnum = zod_1.z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']);
const jobTypeEnum = zod_1.z.enum(['REMOTE', 'ONSITE', 'HYBRID']); // New jobType field
const jobPostValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(3, 'Title must be at least 3 characters'),
        responsibilities: zod_1.z
            .string()
            .min(10, 'Responsibilities must be at least 10 characters'),
        description: zod_1.z
            .string()
            .min(10, 'Description must be at least 10 characters'),
        country: countryEnum,
        city: zod_1.z.string().min(2, 'City is required'),
        education: zod_1.z.string().min(2, 'Education is required'),
        applicationContact: zod_1.z.string().email('Invalid email format'),
        benefits: zod_1.z.string().optional(),
        category: zod_1.z.string(),
        minSalary: zod_1.z.number().nonnegative('Minimum salary cannot be negative'),
        maxSalary: zod_1.z.number().nonnegative('Maximum salary cannot be negative'),
        skill: zod_1.z.string(),
        duration: zod_1.z.string(),
        perks: zod_1.z.string().optional(),
        coverLetter: zod_1.z.string().optional(),
        availability: zod_1.z.string(),
        assessment: zod_1.z.string().optional(),
        vacancy: zod_1.z.number().int().positive('Vacancy must be at least 1'),
        location: zod_1.z.string(),
        employmentType: employmentTypeEnum,
        experienceLevel: experienceLevelEnum,
        salary: zod_1.z.number().optional(),
        salaryType: salaryTypeEnum.optional(),
        currency: currencyEnum.optional(),
        status: jobStatusEnum.default('ACTIVE'),
        jobType: jobTypeEnum, // New jobType field added here
        remote: zod_1.z.boolean().default(false),
        companyName: zod_1.z.string(),
        postedAt: zod_1.z.date().optional(),
        createdAt: zod_1.z.date().optional(),
        updatedAt: zod_1.z.date().optional(),
        applications: zod_1.z.array(zod_1.z.object({})).optional(), // Modify based on actual application structure
    }),
});
exports.JobPostValidation = {
    jobPostValidationSchema,
};
