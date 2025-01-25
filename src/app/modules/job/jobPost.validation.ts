import { z } from 'zod';

const jobPostValidationSchema = z.object({
  body: z.object({
    title: z.string().nonempty({ message: 'Title is required' }),
    experienceLevel: z
      .number()
      .min(0, { message: 'Experience level must be a positive number' }),
    skill: z
      .array(z.string())
      .nonempty({ message: 'Skills must be an array of strings' }),
    vacancy: z.number().min(1, { message: 'Vacancy must be at least 1' }),
    job_description: z
      .string()
      .nonempty({ message: 'Job description is required' }),
    who_can_apply: z
      .array(z.string())
      .nonempty({ message: 'Who can apply must be an array of strings' }),
    additional_candidate_preferences: z.string().optional(),
    perks: z.array(z.string()).optional(),
    ctcMin: z.number().optional(),
    ctcMax: z.number().optional(),
    stipendAmount: z.number().optional(),
    stipendFrequency: z.string().optional(),
    responsibilities: z
      .string()
      .nonempty({ message: 'Responsibilities are required' }),
    category: z.string().nonempty({ message: 'Category is required' }),
    duration: z.string().nonempty({ message: 'Duration is required' }),
    coverLetter: z.string().optional(),
    availability: z.string().nonempty({ message: 'Availability is required' }),
    location: z.string().nonempty({ message: 'Location is required' }),
    applicationDeadline: z
      .string()
      .nonempty({ message: 'Application deadline is required' }),
    ageRange: z.string().optional(),
    gender: z.string().nonempty({ message: 'Gender is required' }),
    jobLevel: z.string().nonempty({ message: 'Job level is required' }),
    stipendType: z.string().optional(),
    experience: z.string().nonempty({ message: 'Experience is required' }),
    employmentType: z
      .string()
      .nonempty({ message: 'Employment type is required' }),
    salaryType: z.string().optional(),
    currency: z.string().optional(),
    job_type: z.string().nonempty({ message: 'Job type is required' }),
    status: z.string().optional(),
    remote: z.boolean().optional(),
    companyName: z.string().optional(),
  }),
});

export const JobPostValidation = {
  jobPostValidationSchema,
};
