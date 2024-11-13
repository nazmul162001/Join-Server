import express from 'express';
import { JobPostController } from './jobPost.controller';

const router = express.Router();

// Job post routes
router.get('/jobposts', JobPostController.getAllJobPosts);
router.get(
  '/jobposts/:id',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  JobPostController.getSingleJobPost,
);

router.post(
  '/jobposts',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  JobPostController.createJobPost,
);

router.patch(
  '/jobposts/:id',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  JobPostController.updateSingleJobPost,
);

router.delete(
  '/jobposts/:id',
  //   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
  JobPostController.deleteSingleJobPost,
);

export const JobPostRoutes = router;
