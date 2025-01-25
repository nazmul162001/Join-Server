import { Job, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  IJobPostFilterRequest,
  IJobPostPriceFilters,
  JobPostSearchableFields,
} from './jobPost.interface';

const createJobPost = async (data: Prisma.JobCreateInput): Promise<Job> => {
  console.log('hello bangladesh');
  const jobPost = await prisma.job.create({
    data,
  });
  return jobPost;
};

const getJobPost = async (id: string): Promise<Job | null> => {
  const jobPost = await prisma.job.findUnique({
    where: { id },
  });
  return jobPost;
};

const updateJobPost = async (
  id: string,
  data: Partial<Prisma.JobUpdateInput>,
): Promise<Job | null> => {
  const jobPost = await prisma.job.update({
    where: { id },
    data,
  });
  return jobPost;
};

const deleteJobPost = async (id: string): Promise<Job> => {
  const jobPost = await prisma.job.delete({
    where: { id },
  });
  return jobPost;
};

const getAllJobPosts = async (
  filters: IJobPostFilterRequest,
  options: IPaginationOptions,
  priceQuery: IJobPostPriceFilters,
): Promise<{
  meta: { total: number; page: number; size: number; totalPage: number };
  data: Job[];
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

  const jobPosts = await prisma.job.findMany({
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

  const total = await prisma.job.count({ where: whereConditions });
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
