import { CandidateProfile } from '@prisma/client';
import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { CandidateProfileService } from './candidateProfile.service';

const createCandidateProfile = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CandidateProfileService.createCandidateProfile(
      req.body,
    );
    sendResponse<CandidateProfile>(res, {
      statusCode: httpStatus.CREATED,
      message: 'Candidate profile created successfully',
      data: result,
      success: true,
    });
  },
);

const getAllCandidateProfiles = catchAsync(
  async (_req: Request, res: Response) => {
    const profiles = await CandidateProfileService.getAllCandidateProfiles();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Candidate profiles retrieved successfully',
      data: profiles,
    });
  },
);

const getSingleCandidateProfile = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const profile = await CandidateProfileService.getSingleCandidateProfile(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Candidate profile retrieved successfully',
      data: profile,
    });
  },
);

const updateCandidateProfile = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const updatedProfile = await CandidateProfileService.updateCandidateProfile(
      id,
      body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Candidate profile updated successfully',
      data: updatedProfile,
    });
  },
);

const deleteCandidateProfile = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedProfile =
      await CandidateProfileService.deleteCandidateProfile(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Candidate profile deleted successfully',
      data: deletedProfile,
    });
  },
);

export const CandidateProfileController = {
  createCandidateProfile,
  getAllCandidateProfiles,
  getSingleCandidateProfile,
  updateCandidateProfile,
  deleteCandidateProfile,
};
