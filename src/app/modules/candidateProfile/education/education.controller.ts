import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { CandidateEducationService } from './education.service';

const createEducation = catchAsync(async (req: Request, res: Response) => {
  const education = await CandidateEducationService.createEducation(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Education created successfully',
    data: education,
  });
});

const getEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const education = await CandidateEducationService.getEducation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education retrieved successfully',
    data: education,
  });
});

const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedEducation = await CandidateEducationService.updateEducation(
    id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education updated successfully',
    data: updatedEducation,
  });
});

const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedEducation = await CandidateEducationService.deleteEducation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Education deleted successfully',
    data: deletedEducation,
  });
});

const getAllEducations = catchAsync(async (_req: Request, res: Response) => {
  const educations = await CandidateEducationService.getAllEducations();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Educations retrieved successfully',
    data: educations,
  });
});

export const CandidateEducationController = {
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
  getAllEducations,
};
