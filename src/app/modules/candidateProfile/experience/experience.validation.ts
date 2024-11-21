import { z } from 'zod';

const workExperienceValidationSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),
    title: z.string().optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    description: z.string().optional(),
    candidateId: z.string().optional(),
  }),
});

export const WorkExperienceValidation = {
  workExperienceValidationSchema,
};
