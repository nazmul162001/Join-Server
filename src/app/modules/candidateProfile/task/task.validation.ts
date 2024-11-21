import { z } from 'zod';

const taskValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(), // Make title optional
    description: z.string().optional(),
    dueDate: z.string().datetime().optional(),
    status: z
      .string({
        required_error: 'Task status is required',
      })
      .optional(), // Make status optional for general updates
    candidateId: z.string().optional(), // Make candidateId optional
  }),
});

export const TaskValidation = {
  taskValidationSchema,
};
