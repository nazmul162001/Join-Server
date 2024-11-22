"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationValidation = void 0;
const zod_1 = require("zod");
const recommendationValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        recommendedBy: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
        candidateId: zod_1.z.string().optional(),
    }),
});
exports.RecommendationValidation = {
    recommendationValidationSchema,
};
