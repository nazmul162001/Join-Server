"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkExperienceValidation = void 0;
const zod_1 = require("zod");
const workExperienceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        companyName: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        startDate: zod_1.z.string().datetime().optional(),
        endDate: zod_1.z.string().datetime().optional(),
        description: zod_1.z.string().optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.WorkExperienceValidation = {
    workExperienceValidationSchema,
};
