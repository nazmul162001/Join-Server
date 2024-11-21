import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { WorkExperienceService } from './experience.service';

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const experience = await WorkExperienceService.createExperience(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Experience created successfully',
    data: experience,
  });
});

const getExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const experience = await WorkExperienceService.getExperience(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience retrieved successfully',
    data: experience,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedExperience = await WorkExperienceService.updateExperience(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience updated successfully',
    data: updatedExperience,
  });
});

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedExperience = await WorkExperienceService.deleteExperience(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experience deleted successfully',
    data: deletedExperience,
  });
});

const getAllExperiences = catchAsync(async (_req: Request, res: Response) => {
  const experiences = await WorkExperienceService.getAllExperiences();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Experiences retrieved successfully',
    data: experiences,
  });
});

export const WorkExperienceController = {
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
  getAllExperiences,
};
