import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { PreferenceController } from './preferrence.controller';
import { PreferenceValidation } from './preferrence.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(PreferenceValidation.preferenceValidationSchema),
  PreferenceController.createPreference,
);

router.get('/', PreferenceController.getAllPreferences);

router.get('/:id', PreferenceController.getPreference);

router.patch(
  '/:id',
  validateRequest(PreferenceValidation.preferenceValidationSchema),
  PreferenceController.updatePreference,
);

router.delete('/:id', PreferenceController.deletePreference);

export const PreferenceRoutes = router;
