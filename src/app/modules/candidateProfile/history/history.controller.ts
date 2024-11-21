import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { HistoryService } from './history.service';

const createHistory = catchAsync(async (req: Request, res: Response) => {
  const history = await HistoryService.createHistory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'History created successfully',
    data: history,
  });
});

const getHistory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const history = await HistoryService.getHistory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'History retrieved successfully',
    data: history,
  });
});

const updateHistory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedHistory = await HistoryService.updateHistory(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'History updated successfully',
    data: updatedHistory,
  });
});

const deleteHistory = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedHistory = await HistoryService.deleteHistory(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'History deleted successfully',
    data: deletedHistory,
  });
});

const getAllHistories = catchAsync(async (_req: Request, res: Response) => {
  const histories = await HistoryService.getAllHistories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Histories retrieved successfully',
    data: histories,
  });
});

export const HistoryController = {
  createHistory,
  getHistory,
  updateHistory,
  deleteHistory,
  getAllHistories,
};
