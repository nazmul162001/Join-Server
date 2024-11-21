import { z } from 'zod';

const historyValidationSchema = z.object({
  body: z.object({
    actionType: z
      .string({
        required_error: 'Action type is required',
      })
      .optional(),
    details: z
      .string({
        required_error: 'Details are required',
      })
      .optional(),
    candidateId: z
      .string({
        required_error: 'Candidate ID is required',
      })
      .optional(),
  }),
});

export const HistoryValidation = {
  historyValidationSchema,
};
