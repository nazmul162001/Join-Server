import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { WorkExperienceController } from './experience.controller';
import { WorkExperienceValidation } from './experience.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(WorkExperienceValidation.workExperienceValidationSchema),
  WorkExperienceController.createExperience,
);

router.get('/', WorkExperienceController.getAllExperiences);

router.get('/:id', WorkExperienceController.getExperience);

router.patch(
  '/:id',
  validateRequest(WorkExperienceValidation.workExperienceValidationSchema),
  WorkExperienceController.updateExperience,
);

router.delete('/:id', WorkExperienceController.deleteExperience);

export const WorkExperienceRoutes = router;
