import { z } from 'zod';

const calendarEventValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.string().datetime().optional(),
    meetingLink: z.string().url().optional(),
    candidateId: z.string().optional(),
  }),
});

export const CalendarEventValidation = {
  calendarEventValidationSchema,
};
