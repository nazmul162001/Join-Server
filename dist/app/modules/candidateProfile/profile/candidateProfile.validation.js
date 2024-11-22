"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfileValidation = void 0;
const zod_1 = require("zod");
const candidateProfileValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        profileCompletion: zod_1.z
            .number({
            required_error: 'Profile completion must be a number',
        })
            .min(0, 'Profile completion must be at least 0')
            .max(100, 'Profile completion cannot exceed 100')
            .optional(),
        name: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        primaryRole: zod_1.z.string().optional(),
        yearsOfExperience: zod_1.z
            .number({
            required_error: 'Years of experience must be a number',
        })
            .nonnegative('Years of experience must be a positive number')
            .optional(),
        openToRoles: zod_1.z.array(zod_1.z.string()).optional(),
        bio: zod_1.z.string().optional(), // Bio is now optional
        website: zod_1.z.string().url('Website must be a valid URL').optional(),
        linkedin: zod_1.z.string().url('LinkedIn must be a valid URL').optional(),
        github: zod_1.z.string().url('GitHub must be a valid URL').optional(),
        twitter: zod_1.z.string().url('Twitter must be a valid URL').optional(),
        resume: zod_1.z.string().url('Resume must be a valid URL').optional(),
        skills: zod_1.z.array(zod_1.z.string()).optional(), // Skills are now optional
        achievements: zod_1.z.string().optional(),
        pronouns: zod_1.z.string().optional(),
        genderIdentity: zod_1.z.string().optional(),
        ethnicity: zod_1.z.array(zod_1.z.string()).optional(),
        preferences: zod_1.z
            .array(zod_1.z.object({
            areasOfInterest: zod_1.z.array(zod_1.z.string()).optional(),
            careerInterests: zod_1.z.array(zod_1.z.string()).optional(),
            currentlyLookingFor: zod_1.z.array(zod_1.z.string()).optional(),
        }))
            .optional(),
        candidateId: zod_1.z.string({
            required_error: 'Candidate ID is required',
        }),
    }),
});
exports.CandidateProfileValidation = {
    candidateProfileValidationSchema,
};
