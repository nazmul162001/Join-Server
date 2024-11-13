import { z } from 'zod';

const jobPostValidateSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    responsibilities: z.string({
      required_error: 'Responsibilities are required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    skill: z.array(z.string()).nonempty({
      message: 'At least one skill is required',
    }),
    duration: z.string({
      required_error: 'Duration is required',
    }),
    perks: z.array(z.string()).optional(),
    coverLetter: z.string().optional(),
    availability: z.string({
      required_error: 'Availability is required',
    }),
    assessment: z.array(z.string()).optional(),
    vacancy: z
      .number({
        required_error: 'Vacancy is required',
      })
      .int(),
    location: z.string({
      required_error: 'Location is required',
    }),
    employmentType: z.enum(
      [
        'FULL_TIME',
        'PART_TIME',
        'CONTRACT',
        'TEMPORARY',
        'INTERNSHIP',
        'FREELANCE',
      ],
      {
        required_error: 'Employment type is required',
      },
    ),
    experienceLevel: z.enum(['JUNIOR', 'MID', 'SENIOR', 'LEAD', 'EXECUTIVE'], {
      required_error: 'Experience level is required',
    }),
    salary: z.number().optional(),
    salaryType: z
      .enum(['HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL'])
      .optional(),
    currency: z.enum(['USD', 'BDT', 'EUR', 'GBP', 'AUD']).optional(),
    postedBy: z.string({
      required_error: 'Posted by is required',
    }),
    status: z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']).default('ACTIVE'),
    remote: z.boolean().default(false),
    companyName: z.string({
      required_error: 'Company name is required',
    }),
  }),
});

export const JobPostValidation = {
  jobPostValidateSchema,
};
