"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostValidation = void 0;
const zod_1 = require("zod");
const jobPostValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        responsibilities: zod_1.z.string().optional(),
        category: zod_1.z.string().optional(),
        skill: zod_1.z.string().optional(),
        duration: zod_1.z.string().optional(),
        perks: zod_1.z.string().optional(),
        coverLetter: zod_1.z.string().optional(),
        availability: zod_1.z.string().optional(),
        assessment: zod_1.z.string().optional(),
        vacancy: zod_1.z.number().optional(),
        location: zod_1.z.string().optional(),
        employmentType: zod_1.z.string().optional(),
        experienceLevel: zod_1.z.string().optional(),
        salary: zod_1.z.number().optional(),
        salaryType: zod_1.z.string().optional(),
        currency: zod_1.z.string().optional(),
        status: zod_1.z.string().optional(),
        remote: zod_1.z.boolean().optional(),
        companyName: zod_1.z.string().optional(),
    }),
});
exports.JobPostValidation = {
    jobPostValidationSchema,
};
