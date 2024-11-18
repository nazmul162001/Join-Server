import { z } from 'zod';

const applyJobValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Name is required',
      })
      .min(1, { message: 'Name cannot be empty' }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({ message: 'Invalid email address' }),
    phone: z
      .string({
        required_error: 'Phone number is required',
      })
      .regex(/^\d+$/, { message: 'Phone number must contain only digits' }),
    linkedin: z
      .string({
        required_error: 'LinkedIn profile is required',
      })
      .url({ message: 'Invalid LinkedIn URL' }),
    github: z
      .string({
        required_error: 'GitHub profile is required',
      })
      .url({ message: 'Invalid GitHub URL' }),
    portfolio: z
      .string({
        required_error: 'Portfolio URL is required',
      })
      .url({ message: 'Invalid portfolio URL' }),
    coverLetter: z
      .string({
        required_error: 'Cover letter is required',
      })
      .min(1, { message: 'Cover letter cannot be empty' }),
    jobPostId: z
      .string({
        required_error: 'Job post ID is required',
      })
      .uuid({ message: 'Invalid job post ID format' }),
    userId: z
      .string({
        required_error: 'User ID is required',
      })
      .uuid({ message: 'Invalid user ID format' }),
  }),
});

export const ApplyJobValidation = {
  applyJobValidationSchema,
};
