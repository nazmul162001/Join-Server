import { z } from 'zod';

const jobPostValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    responsibilities: z.string().optional(),
    category: z.string().optional(),
    skill: z.string().optional(),
    duration: z.string().optional(),
    perks: z.string().optional(),
    coverLetter: z.string().optional(),
    availability: z.string().optional(),
    assessment: z.string().optional(),
    vacancy: z.number().optional(),
    location: z.string().optional(),
    employmentType: z.string().optional(),
    experienceLevel: z.string().optional(),
    salary: z.number().optional(),
    salaryType: z.string().optional(),
    currency: z.string().optional(),
    status: z.string().optional(),
    remote: z.boolean().optional(),
    companyName: z.string().optional(),
  }),
});

export const JobPostValidation = {
  jobPostValidationSchema,
};
