"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryValidation = void 0;
const zod_1 = require("zod");
const historyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        actionType: zod_1.z
            .string({
            required_error: 'Action type is required',
        })
            .optional(),
        details: zod_1.z
            .string({
            required_error: 'Details are required',
        })
            .optional(),
        candidateId: zod_1.z
            .string({
            required_error: 'Candidate ID is required',
        })
            .optional(),
    }),
});
exports.HistoryValidation = {
    historyValidationSchema,
};
