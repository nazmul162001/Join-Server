import { JobPost, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  IJobPostFilterRequest,
  IJobPostPriceFilters,
  JobPostSearchableFields,
} from './jobPost.interface';

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

// const getAllJobPosts = async (): Promise<JobPost[]> => {
//   const jobPosts = await prisma.jobPost.findMany();
//   return jobPosts;
// };

const getAllJobPosts = async (
  filters: IJobPostFilterRequest,
  options: IPaginationOptions,
  priceQuery: IJobPostPriceFilters,
): Promise<{
  meta: { total: number; page: number; size: number; totalPage: number };
  data: JobPost[];
}> => {
  const { page, size, skip } = paginationHelpers.calculatePagination(options);
  const { search, ...filtersData } = filters;

  const andConditions = [];

  // Salary filtering logic
  if (
    priceQuery.minSalary !== undefined ||
    priceQuery.maxSalary !== undefined
  ) {
    const minSalary = Number(priceQuery.minSalary);
    const maxSalary = Number(priceQuery.maxSalary);

    if (!isNaN(minSalary) && !isNaN(maxSalary)) {
      andConditions.push({
        salary: {
          gte: minSalary,
          lte: maxSalary,
        },
      });
    } else if (!isNaN(minSalary)) {
      andConditions.push({
        salary: {
          gte: minSalary,
        },
      });
    } else if (!isNaN(maxSalary)) {
      andConditions.push({
        salary: {
          lte: maxSalary,
        },
      });
    }
  }

  // Search logic
  if (search) {
    andConditions.push({
      OR: JobPostSearchableFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  // Additional filters
  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const jobPosts = await prisma.jobPost.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { postedAt: 'desc' },
    include: {
      applications: true,
    },
  });

  const total = await prisma.jobPost.count({ where: whereConditions });
  const totalPage = Math.ceil(total / size);

  return {
    meta: {
      total,
      page,
      size,
      totalPage,
    },
    data: jobPosts,
  };
};

export const JobPostService = {
  createJobPost,
  getJobPost,
  updateJobPost,
  deleteJobPost,
  getAllJobPosts,
};
