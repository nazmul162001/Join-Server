import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { PreferenceService } from './preferrence.service';

const createPreference = catchAsync(async (req: Request, res: Response) => {
  const preference = await PreferenceService.createPreference(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Preference created successfully',
    data: preference,
  });
});

const getPreference = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const preference = await PreferenceService.getPreference(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Preference retrieved successfully',
    data: preference,
  });
});

const updatePreference = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPreference = await PreferenceService.updatePreference(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Preference updated successfully',
    data: updatedPreference,
  });
});

const deletePreference = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedPreference = await PreferenceService.deletePreference(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Preference deleted successfully',
    data: deletedPreference,
  });
});

const getAllPreferences = catchAsync(async (_req: Request, res: Response) => {
  const preferences = await PreferenceService.getAllPreferences();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Preferences retrieved successfully',
    data: preferences,
  });
});

export const PreferenceController = {
  createPreference,
  getPreference,
  updatePreference,
  deletePreference,
  getAllPreferences,
};
