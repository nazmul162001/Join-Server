import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import {
  IJobPost,
  IJobPostFilterRequest,
  JobPostFilterableFields,
  JobPostPriceSearchableFields,
} from './jobPost.interface';
import { JobPostService } from './jobPost.service';

// Get all job posts with filtering

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

// Get a single job post by ID
const getSingleJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const jobPost = await JobPostService.getSingleJobPost(id);

  if (!jobPost) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Job post not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job post retrieved successfully',
    data: jobPost,
  });
});

// Create a new job post
// const createJobPost = catchAsync(async (req: Request, res: Response) => {
//   const jobPostData = {
//     ...req.body,
//     skill: JSON.stringify(req.body.skill),
//     perks: req.body.perks ? JSON.stringify(req.body.perks) : undefined,
//     assessment: req.body.assessment
//       ? JSON.stringify(req.body.assessment)
//       : undefined,
//   };

//   const newJobPost = await JobPostService.createJobPost(jobPostData);

//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: 'Job post created successfully',
//     data: newJobPost,
//   });
// });
// @ts-ignore
const createJobPost = catchAsync(async (req: Request, res: Response) => {
  const jobPostData = {
    ...req.body,
    skill: JSON.stringify(req.body.skill),
    perks: req.body.perks ? JSON.stringify(req.body.perks) : undefined,
    assessment: req.body.assessment
      ? JSON.stringify(req.body.assessment)
      : undefined,
  };

  const newJobPost = await JobPostService.createJobPost(jobPostData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job post created successfully',
    data: newJobPost,
  });
});

// Update a single job post by ID
const updateSingleJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const jobPostData: Partial<IJobPost> = req.body;
  const updatedJobPost = await JobPostService.updateSingleJobPost(
    id,
    jobPostData,
  );

  if (!updatedJobPost) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Job post not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job post updated successfully',
    data: updatedJobPost,
  });
});

// Delete a single job post by ID
const deleteSingleJobPost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedJobPost = await JobPostService.deleteSingleJobPost(id);

  if (!deletedJobPost) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Job post not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job post deleted successfully',
    data: deletedJobPost,
  });
});

export const JobPostController = {
  getAllJobPosts,
  getSingleJobPost,
  createJobPost,
  updateSingleJobPost,
  deleteSingleJobPost,
};
