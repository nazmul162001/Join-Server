"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventValidation = void 0;
const zod_1 = require("zod");
const calendarEventValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        date: zod_1.z.string().datetime().optional(),
        meetingLink: zod_1.z.string().url().optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.CalendarEventValidation = {
    calendarEventValidationSchema,
};
