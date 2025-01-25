import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { JobPostController } from './jobPost.controller';
import { JobPostValidation } from './jobPost.validation';

const router = express.Router();

router.post(
  '/create-job',
  validateRequest(JobPostValidation.jobPostValidationSchema),
  JobPostController.createJobPost,
);

router.get('/', JobPostController.getAllJobPosts);

router.get('/:id', JobPostController.getJobPost);

router.patch(
  '/:id',
  validateRequest(JobPostValidation.jobPostValidationSchema),
  JobPostController.updateJobPost,
);

router.delete('/:id', JobPostController.deleteJobPost);

export const JobPostRoutes = router;
