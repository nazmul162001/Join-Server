import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ApplyService } from './apply.service';

// Get all applications
const getAllApplications = catchAsync(async (req: Request, res: Response) => {
  const applications = await ApplyService.getAllApplications();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All applications retrieved successfully',
    data: applications,
  });
});

// Get single application
const getSingleApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const application = await ApplyService.getSingleApplication(id);

  if (!application) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Application Not Found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application retrieved successfully',
    data: application,
  });
});

// Create a new application
const createApplication = catchAsync(async (req: Request, res: Response) => {
  const applicationData = req.body;

  const newApplication = await ApplyService.createApplication(applicationData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Application created successfully',
    data: newApplication,
  });
});

// Update single application
const updateApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  const updatedApplication = await ApplyService.updateApplication(id, body);

  if (!updatedApplication) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Application not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application updated successfully',
    data: updatedApplication,
  });
});

// Delete single application
const deleteApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const application = await ApplyService.deleteApplication(id);

  if (!application) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Application does not exist',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application deleted successfully',
    data: application,
  });
});

export const ApplyController = {
  getAllApplications,
  getSingleApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};
