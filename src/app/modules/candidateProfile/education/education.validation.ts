import { z } from 'zod';

const candidateEducationValidationSchema = z.object({
  body: z.object({
    schoolName: z.string().optional(),
    degree: z.string().optional(),
    fieldOfStudy: z.string().optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    grade: z.string().optional(),
    description: z.string().optional(),
    candidateId: z.string().optional(),
  }),
});

export const CandidateEducationValidation = {
  candidateEducationValidationSchema,
};
