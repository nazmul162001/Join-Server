import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { JobPostService } from './jobPost.service';

const createJobPost = catchAsync(async (req: Request, res: Response) => {
  const jobPost = await JobPostService.createJobPost(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job Post created successfully',
    data: jobPost,
  });
});

const getJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const jobPost = await JobPostService.getJobPost(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job Post retrieved successfully',
    data: jobPost,
  });
});

const updateJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedJobPost = await JobPostService.updateJobPost(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job Post updated successfully',
    data: updatedJobPost,
  });
});

const deleteJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedJobPost = await JobPostService.deleteJobPost(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job Post deleted successfully',
    data: deletedJobPost,
  });
});

const getAllJobPosts = catchAsync(async (_req: Request, res: Response) => {
  const jobPosts = await JobPostService.getAllJobPosts();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job Posts retrieved successfully',
    data: jobPosts,
  });
});

export const JobPostController = {
  createJobPost,
  getJobPost,
  updateJobPost,
  deleteJobPost,
  getAllJobPosts,
};
