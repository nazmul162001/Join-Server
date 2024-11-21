import { z } from 'zod';

const candidateProfileValidationSchema = z.object({
  body: z.object({
    profileCompletion: z
      .number({
        required_error: 'Profile completion must be a number',
      })
      .min(0, 'Profile completion must be at least 0')
      .max(100, 'Profile completion cannot exceed 100')
      .optional(),
    name: z.string().optional(),
    location: z.string().optional(),
    primaryRole: z.string().optional(),
    yearsOfExperience: z
      .number({
        required_error: 'Years of experience must be a number',
      })
      .nonnegative('Years of experience must be a positive number')
      .optional(),
    openToRoles: z.array(z.string()).optional(),
    bio: z.string().optional(), // Bio is now optional
    website: z.string().url('Website must be a valid URL').optional(),
    linkedin: z.string().url('LinkedIn must be a valid URL').optional(),
    github: z.string().url('GitHub must be a valid URL').optional(),
    twitter: z.string().url('Twitter must be a valid URL').optional(),
    resume: z.string().url('Resume must be a valid URL').optional(),
    skills: z.array(z.string()).optional(), // Skills are now optional
    achievements: z.string().optional(),
    pronouns: z.string().optional(),
    genderIdentity: z.string().optional(),
    ethnicity: z.array(z.string()).optional(),
    preferences: z
      .array(
        z.object({
          areasOfInterest: z.array(z.string()).optional(),
          careerInterests: z.array(z.string()).optional(),
          currentlyLookingFor: z.array(z.string()).optional(),
        }),
      )
      .optional(),
    candidateId: z.string({
      required_error: 'Candidate ID is required',
    }),
  }),
});

export const CandidateProfileValidation = {
  candidateProfileValidationSchema,
};
