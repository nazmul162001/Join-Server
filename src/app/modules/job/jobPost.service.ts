import { JobPost, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createJobPost = async (
  data: Prisma.JobPostCreateInput,
): Promise<JobPost> => {
  const jobPost = await prisma.jobPost.create({
    data,
  });
  return jobPost;
};

const getJobPost = async (id: string): Promise<JobPost | null> => {
  const jobPost = await prisma.jobPost.findUnique({
    where: { id },
  });
  return jobPost;
};

const updateJobPost = async (
  id: string,
  data: Partial<Prisma.JobPostUpdateInput>,
): Promise<JobPost | null> => {
  const jobPost = await prisma.jobPost.update({
    where: { id },
    data,
  });
  return jobPost;
};

const deleteJobPost = async (id: string): Promise<JobPost> => {
  const jobPost = await prisma.jobPost.delete({
    where: { id },
  });
  return jobPost;
};

const getAllJobPosts = async (): Promise<JobPost[]> => {
  const jobPosts = await prisma.jobPost.findMany();
  return jobPosts;
};

export const JobPostService = {
  createJobPost,
  getJobPost,
  updateJobPost,
  deleteJobPost,
  getAllJobPosts,
};
