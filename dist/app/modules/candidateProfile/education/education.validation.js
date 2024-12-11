"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateEducationValidation = void 0;
const zod_1 = require("zod");
const candidateEducationValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        schoolName: zod_1.z.string().optional(),
        degree: zod_1.z.string().optional(),
        fieldOfStudy: zod_1.z.string().optional(),
        startDate: zod_1.z.string().datetime().optional(),
        endDate: zod_1.z.string().datetime().optional(),
        grade: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.CandidateEducationValidation = {
    candidateEducationValidationSchema,
};
