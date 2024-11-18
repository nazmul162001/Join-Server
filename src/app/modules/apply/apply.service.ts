import { ApplyJob } from '@prisma/client';
// @ts-ignore
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

// Get all applications
const getAllApplications = async (): Promise<ApplyJob[]> => {
  const applications = await prisma.applyJob.findMany({
    include: {
      user: true, // Include related user
      jobPost: true, // Include related job post
    },
  });
  return applications;
};

// Get single application
const getSingleApplication = async (id: string): Promise<ApplyJob | null> => {
  const application = await prisma.applyJob.findUnique({
    where: { id },
    include: {
      user: true, // Include related user
      jobPost: true, // Include related job post
    },
  });

  if (!application) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Application not found');
  }

  return application;
};

// Create a new application
const createApplication = async (
  data: Partial<ApplyJob>,
): Promise<ApplyJob> => {
  const application = await prisma.applyJob.create({
    // @ts-ignore
    data,
    include: {
      user: true, // Include related user
      jobPost: true, // Include related job post
    },
  });
  return application;
};

// Update single application
const updateApplication = async (
  id: string,
  data: Partial<ApplyJob>,
): Promise<ApplyJob | null> => {
  const updatedApplication = await prisma.applyJob.update({
    where: { id },
    data,
    include: {
      user: true, // Include related user
      jobPost: true, // Include related job post
    },
  });

  if (!updatedApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Application not found');
  }

  return updatedApplication;
};

// Delete single application
const deleteApplication = async (id: string): Promise<ApplyJob | null> => {
  const deletedApplication = await prisma.applyJob.delete({
    where: { id },
    include: {
      user: true, // Include related user
      jobPost: true, // Include related job post
    },
  });

  if (!deletedApplication) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Application not found');
  }

  return deletedApplication;
};

export const ApplyService = {
  getAllApplications,
  getSingleApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};
