"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyJobValidation = void 0;
const zod_1 = require("zod");
const applyJobValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: 'Name is required',
        })
            .min(1, { message: 'Name cannot be empty' }),
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email({ message: 'Invalid email address' }),
        phone: zod_1.z
            .string({
            required_error: 'Phone number is required',
        })
            .regex(/^\d+$/, { message: 'Phone number must contain only digits' }),
        linkedin: zod_1.z
            .string({
            required_error: 'LinkedIn profile is required',
        })
            .url({ message: 'Invalid LinkedIn URL' }),
        github: zod_1.z
            .string({
            required_error: 'GitHub profile is required',
        })
            .url({ message: 'Invalid GitHub URL' }),
        portfolio: zod_1.z
            .string({
            required_error: 'Portfolio URL is required',
        })
            .url({ message: 'Invalid portfolio URL' }),
        coverLetter: zod_1.z
            .string({
            required_error: 'Cover letter is required',
        })
            .min(1, { message: 'Cover letter cannot be empty' }),
        jobPostId: zod_1.z
            .string({
            required_error: 'Job post ID is required',
        })
            .uuid({ message: 'Invalid job post ID format' }),
        userId: zod_1.z
            .string({
            required_error: 'User ID is required',
        })
            .uuid({ message: 'Invalid user ID format' }),
    }),
});
exports.ApplyJobValidation = {
    applyJobValidationSchema,
};
