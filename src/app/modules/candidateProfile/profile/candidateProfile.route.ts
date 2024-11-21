import express from 'express';
import { ENUM_USER_ROLE } from '../../../../enums/user';
import auth from '../../../middlewares/auth';
import { CandidateProfileController } from './candidateProfile.controller';
const router = express.Router();

// user routes
router.get(
  '/user-profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR, ENUM_USER_ROLE.CANDIDATE),
  CandidateProfileController.getAllCandidateProfiles,
);
router.get('/:id', CandidateProfileController.getSingleCandidateProfile);
router.post(
  '/create-profile',
  CandidateProfileController.createCandidateProfile,
);
router.patch('/:id', CandidateProfileController.updateCandidateProfile);
router.delete('/:id', CandidateProfileController.deleteCandidateProfile);

export const CandidateProfileRoutes = router;
