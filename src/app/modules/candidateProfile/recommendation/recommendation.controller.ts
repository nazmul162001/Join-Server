import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { RecommendationService } from './recommendation.service';

const createRecommendation = catchAsync(async (req: Request, res: Response) => {
  const recommendation = await RecommendationService.createRecommendation(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Recommendation created successfully',
    data: recommendation,
  });
});

const getRecommendation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const recommendation = await RecommendationService.getRecommendation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recommendation retrieved successfully',
    data: recommendation,
  });
});

const updateRecommendation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedRecommendation =
    await RecommendationService.updateRecommendation(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recommendation updated successfully',
    data: updatedRecommendation,
  });
});

const deleteRecommendation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedRecommendation =
    await RecommendationService.deleteRecommendation(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Recommendation deleted successfully',
    data: deletedRecommendation,
  });
});

const getAllRecommendations = catchAsync(
  async (_req: Request, res: Response) => {
    const recommendations = await RecommendationService.getAllRecommendations();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Recommendations retrieved successfully',
      data: recommendations,
    });
  },
);

export const RecommendationController = {
  createRecommendation,
  getRecommendation,
  updateRecommendation,
  deleteRecommendation,
  getAllRecommendations,
};
