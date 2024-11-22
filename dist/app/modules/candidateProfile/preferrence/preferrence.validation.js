"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceValidation = void 0;
const zod_1 = require("zod");
const preferenceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        areasOfInterest: zod_1.z.array(zod_1.z.string()).optional(),
        careerInterests: zod_1.z.array(zod_1.z.string()).optional(),
        currentlyLookingFor: zod_1.z.array(zod_1.z.string()).optional(),
        workModes: zod_1.z.array(zod_1.z.string()).optional(),
        jobType: zod_1.z.array(zod_1.z.string()).optional(),
        preferredIndustries: zod_1.z.array(zod_1.z.string()).optional(),
        preferredLocations: zod_1.z.array(zod_1.z.string()).optional(),
        salaryExpectationRange: zod_1.z.string().optional(),
        openToRelocation: zod_1.z.boolean().optional(),
        remoteWorkPreference: zod_1.z.boolean().optional(),
        companySizePreference: zod_1.z.array(zod_1.z.string()).optional(),
        employmentLevel: zod_1.z.array(zod_1.z.string()).optional(),
        desiredJobTitles: zod_1.z.array(zod_1.z.string()).optional(),
        skillImprovementAreas: zod_1.z.array(zod_1.z.string()).optional(),
        preferredWorkEnvironment: zod_1.z.string().optional(),
        availableStartDate: zod_1.z.string().datetime().optional(),
        preferredLanguages: zod_1.z.array(zod_1.z.string()).optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.PreferenceValidation = {
    preferenceValidationSchema,
};
