"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskValidation = void 0;
const zod_1 = require("zod");
const taskValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        dueDate: zod_1.z.string().datetime().optional(),
        status: zod_1.z
            .string({
            required_error: 'Task status is required',
        })
            .optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.TaskValidation = {
    taskValidationSchema,
};
