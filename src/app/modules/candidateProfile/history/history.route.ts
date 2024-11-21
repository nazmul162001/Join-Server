import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { HistoryController } from './history.controller';
import { HistoryValidation } from './history.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(HistoryValidation.historyValidationSchema),
  HistoryController.createHistory,
);

router.get('/', HistoryController.getAllHistories);

router.get('/:id', HistoryController.getHistory);

router.patch(
  '/:id',
  validateRequest(HistoryValidation.historyValidationSchema),
  HistoryController.updateHistory,
);

router.delete('/:id', HistoryController.deleteHistory);

export const HistoryRoutes = router;
