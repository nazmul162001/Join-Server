'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.JobPostValidation = void 0;
const zod_1 = require('zod');
const jobPostValidateSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({
      required_error: 'Title is required',
    }),
    responsibilities: zod_1.z.string({
      required_error: 'Responsibilities are required',
    }),
    category: zod_1.z.string({
      required_error: 'Category is required',
    }),
    skill: zod_1.z.array(zod_1.z.string()).nonempty({
      message: 'At least one skill is required',
    }),
    duration: zod_1.z.string({
      required_error: 'Duration is required',
    }),
    perks: zod_1.z.array(zod_1.z.string()).optional(),
    coverLetter: zod_1.z.string().optional(),
    availability: zod_1.z.string({
      required_error: 'Availability is required',
    }),
    assessment: zod_1.z.array(zod_1.z.string()).optional(),
    vacancy: zod_1.z
      .number({
        required_error: 'Vacancy is required',
      })
      .int(),
    location: zod_1.z.string({
      required_error: 'Location is required',
    }),
    employmentType: zod_1.z.enum(
      [
        'FULL_TIME',
        'PART_TIME',
        'CONTRACT',
        'TEMPORARY',
        'INTERNSHIP',
        'FREELANCE',
      ],
      {
        required_error: 'Employment type is required',
      },
    ),
    experienceLevel: zod_1.z.enum(
      ['JUNIOR', 'MID', 'SENIOR', 'LEAD', 'EXECUTIVE'],
      {
        required_error: 'Experience level is required',
      },
    ),
    salary: zod_1.z.number().optional(),
    salaryType: zod_1.z
      .enum(['HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ANNUAL'])
      .optional(),
    currency: zod_1.z.enum(['USD', 'BDT', 'EUR', 'GBP', 'AUD']).optional(),
    postedBy: zod_1.z.string({
      required_error: 'Posted by is required',
    }),
    status: zod_1.z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']).default('ACTIVE'),
    remote: zod_1.z.boolean().default(false),
    companyName: zod_1.z.string({
      required_error: 'Company name is required',
    }),
  }),
});
exports.JobPostValidation = {
  jobPostValidateSchema,
};
