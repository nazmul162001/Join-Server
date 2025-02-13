"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const jobPost_controller_1 = require("./jobPost.controller");
const jobPost_validation_1 = require("./jobPost.validation");
const router = express_1.default.Router();
router.post('/create-job', (0, validateRequest_1.default)(jobPost_validation_1.JobPostValidation.jobPostValidationSchema), jobPost_controller_1.JobPostController.createJobPost);
router.get('/', jobPost_controller_1.JobPostController.getAllJobPosts);
router.get('/:id', jobPost_controller_1.JobPostController.getJobPost);
router.patch('/:id', (0, validateRequest_1.default)(jobPost_validation_1.JobPostValidation.jobPostValidationSchema), jobPost_controller_1.JobPostController.updateJobPost);
router.delete('/:id', jobPost_controller_1.JobPostController.deleteJobPost);
exports.JobPostRoutes = router;
