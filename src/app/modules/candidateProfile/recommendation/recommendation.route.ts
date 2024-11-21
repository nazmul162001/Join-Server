import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { RecommendationController } from './recommendation.controller';
import { RecommendationValidation } from './recommendation.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(RecommendationValidation.recommendationValidationSchema),
  RecommendationController.createRecommendation,
);

router.get('/', RecommendationController.getAllRecommendations);

router.get('/:id', RecommendationController.getRecommendation);

router.patch(
  '/:id',
  validateRequest(RecommendationValidation.recommendationValidationSchema),
  RecommendationController.updateRecommendation,
);

router.delete('/:id', RecommendationController.deleteRecommendation);

export const RecommendationRoutes = router;
