"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkExperienceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const experience_controller_1 = require("./experience.controller");
const experience_validation_1 = require("./experience.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(experience_validation_1.WorkExperienceValidation.workExperienceValidationSchema), experience_controller_1.WorkExperienceController.createExperience);
router.get('/', experience_controller_1.WorkExperienceController.getAllExperiences);
router.get('/:id', experience_controller_1.WorkExperienceController.getExperience);
router.patch('/:id', (0, validateRequest_1.default)(experience_validation_1.WorkExperienceValidation.workExperienceValidationSchema), experience_controller_1.WorkExperienceController.updateExperience);
router.delete('/:id', experience_controller_1.WorkExperienceController.deleteExperience);
exports.WorkExperienceRoutes = router;
