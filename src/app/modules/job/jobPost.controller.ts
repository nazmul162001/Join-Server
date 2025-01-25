import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  IJobPostFilterRequest,
  JobPostFilterableFields,
  JobPostPriceSearchableFields,
} from './jobPost.interface';
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
  console.log('hello im in edit method');
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

const getAllJobPosts = catchAsync(async (req: Request, res: Response) => {
  const filters: IJobPostFilterRequest = pick(
    req.query,
    JobPostFilterableFields,
  );
  const priceQuery = pick(req.query, JobPostPriceSearchableFields);
  const options = pick(req.query, paginationFields);

  const jobPosts = await JobPostService.getAllJobPosts(
    filters,
    options,
    priceQuery,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All job posts retrieved successfully',
    meta: jobPosts.meta,
    data: jobPosts.data,
  });
});

export const JobPostController = {
  createJobPost,
  getJobPost,
  updateJobPost,
  deleteJobPost,
  getAllJobPosts,
};
