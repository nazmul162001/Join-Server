import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { TaskService } from './task.service';

const createTask = catchAsync(async (req: Request, res: Response) => {
  const task = await TaskService.createTask(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Task created successfully',
    data: task,
  });
});

const getTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await TaskService.getTask(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task retrieved successfully',
    data: task,
  });
});

const updateTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask = await TaskService.updateTask(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: updatedTask,
  });
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await TaskService.deleteTask(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: deletedTask,
  });
});

const getAllTasks = catchAsync(async (_req: Request, res: Response) => {
  const tasks = await TaskService.getAllTasks();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tasks retrieved successfully',
    data: tasks,
  });
});

export const TaskController = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
};
