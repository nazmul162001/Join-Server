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
<<<<<<< HEAD
        salaryType: zod_1.z.string().optional(),
        currency: zod_1.z.string().optional(),
        status: zod_1.z.string().optional(),
        remote: zod_1.z.boolean().optional(),
        companyName: zod_1.z.string().optional(),
=======
        salaryType: zod_1.z
            .enum(['HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL'])
            .optional(),
        currency: zod_1.z.enum(['USD', 'BDT', 'EUR', 'GBP', 'AUD']).optional(),
        status: zod_1.z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']).default('ACTIVE'),
        remote: zod_1.z.boolean().default(false),
        companyName: zod_1.z.string({
            required_error: 'Company name is required',
        }),
>>>>>>> c8827303dba647068f68428e0f1d487bdb5c3be4
    }),
});
exports.JobPostValidation = {
    jobPostValidationSchema,
};
