import { z } from 'zod';

const preferenceValidationSchema = z.object({
  body: z.object({
    areasOfInterest: z.array(z.string()).optional(),
    careerInterests: z.array(z.string()).optional(),
    currentlyLookingFor: z.array(z.string()).optional(),
    workModes: z.array(z.string()).optional(),
    jobType: z.array(z.string()).optional(),
    preferredIndustries: z.array(z.string()).optional(),
    preferredLocations: z.array(z.string()).optional(),
    salaryExpectationRange: z.string().optional(),
    openToRelocation: z.boolean().optional(),
    remoteWorkPreference: z.boolean().optional(),
    companySizePreference: z.array(z.string()).optional(),
    employmentLevel: z.array(z.string()).optional(),
    desiredJobTitles: z.array(z.string()).optional(),
    skillImprovementAreas: z.array(z.string()).optional(),
    preferredWorkEnvironment: z.string().optional(),
    availableStartDate: z.string().datetime().optional(),
    preferredLanguages: z.array(z.string()).optional(),
    candidateId: z.string().optional(),
  }),
});

export const PreferenceValidation = {
  preferenceValidationSchema,
};
