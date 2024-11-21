import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { TaskController } from './task.controller';
import { TaskValidation } from './task.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(TaskValidation.taskValidationSchema),
  TaskController.createTask,
);

router.get('/', TaskController.getAllTasks);

router.get('/:id', TaskController.getTask);

router.patch(
  '/:id',
  validateRequest(TaskValidation.taskValidationSchema),
  TaskController.updateTask,
);

router.delete('/:id', TaskController.deleteTask);

export const TaskRoutes = router;
