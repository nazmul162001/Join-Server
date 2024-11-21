import { z } from 'zod';

const recommendationValidationSchema = z.object({
  body: z.object({
    recommendedBy: z.string().optional(),
    message: z.string().optional(),
    candidateId: z.string().optional(),
  }),
});

export const RecommendationValidation = {
  recommendationValidationSchema,
};
