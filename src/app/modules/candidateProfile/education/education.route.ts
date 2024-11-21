import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { CandidateEducationController } from './education.controller';
import { CandidateEducationValidation } from './education.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(
    CandidateEducationValidation.candidateEducationValidationSchema,
  ),
  CandidateEducationController.createEducation,
);

router.get('/', CandidateEducationController.getAllEducations);

router.get('/:id', CandidateEducationController.getEducation);

router.patch(
  '/:id',
  validateRequest(
    CandidateEducationValidation.candidateEducationValidationSchema,
  ),
  CandidateEducationController.updateEducation,
);

router.delete('/:id', CandidateEducationController.deleteEducation);

export const CandidateEducationRoutes = router;
