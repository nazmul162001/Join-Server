import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { TaskController } from './task.controller';
import { TaskValidation } from './task.validation';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(TaskValidation.taskValidationSchema),
    TaskController.createTask,
  )
  .get(TaskController.getAllTasks);

router
  .route('/:id')
  .get(TaskController.getTask)
  .patch(
    validateRequest(TaskValidation.taskValidationSchema),
    TaskController.updateTask,
  )
  .delete(TaskController.deleteTask);

export const TaskRoutes = router;
