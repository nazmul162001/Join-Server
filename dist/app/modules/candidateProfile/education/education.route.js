"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateEducationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const education_controller_1 = require("./education.controller");
const education_validation_1 = require("./education.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(education_validation_1.CandidateEducationValidation.candidateEducationValidationSchema), education_controller_1.CandidateEducationController.createEducation);
router.get('/', education_controller_1.CandidateEducationController.getAllEducations);
router.get('/:id', education_controller_1.CandidateEducationController.getEducation);
router.patch('/:id', (0, validateRequest_1.default)(education_validation_1.CandidateEducationValidation.candidateEducationValidationSchema), education_controller_1.CandidateEducationController.updateEducation);
router.delete('/:id', education_controller_1.CandidateEducationController.deleteEducation);
exports.CandidateEducationRoutes = router;
