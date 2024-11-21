import { z } from 'zod';

const taskValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    dueDate: z.string().datetime().optional(),
    status: z
      .string({
        required_error: 'Task status is required',
      })
      .optional(),
    candidateId: z.string().optional(),
  }),
});

export const TaskValidation = {
  taskValidationSchema,
};
