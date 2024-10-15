import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';
const router = express.Router();

// user routes
router.get('/users', UserController.getAllUsers);
router.get(
  '/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CANDIDATE),
  UserController.getUserProfile
);
router.get(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CANDIDATE),
  UserController.getSingleUser
);

router.patch(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CANDIDATE),
  UserController.updateSingleUser
);

router.delete(
  '/users/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CANDIDATE),
  UserController.deleteSingleUser
);

// authentication
// router.post('/signup', UserController.createUser);
// router.post('/signin', UserController.loginUser);

export const UserRoutes = router;
