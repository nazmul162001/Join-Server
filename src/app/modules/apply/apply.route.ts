import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ApplyController } from './apply.controller';

const router = express.Router();

// Job post routes
router.get('/apply', ApplyController.getAllApplications);
router.get(
  '/apply/:id',
  auth(ENUM_USER_ROLE.CANDIDATE),
  ApplyController.getSingleApplication,
);

router.post(
  '/apply',
  auth(ENUM_USER_ROLE.CANDIDATE),
  ApplyController.createApplication,
);

router.patch(
  '/apply/:id',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  ApplyController.updateApplication,
);

router.delete(
  '/apply/:id',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  ApplyController.deleteApplication,
);

export const ApplyJobRoutes = router;
