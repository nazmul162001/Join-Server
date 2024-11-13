import { JobPost } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import {
  IJobPost,
  IJobPostFilterRequest,
  IJobPostPriceFilters,
  JobPostSearchableFields,
} from './jobPost.interface';

// Get all job posts with filters
// const getAllJobPosts = async (
//   filters: IJobPostFilterRequest,
// ): Promise<JobPost[]> => {
//   const { search, category, location, employmentType, experienceLevel } =
//     filters;

//   const jobPosts = await prisma.jobPost.findMany({
//     where: {
//       ...(search && {
//         OR: [
//           { title: { contains: search, mode: 'insensitive' } },
//           { category: { contains: search, mode: 'insensitive' } },
//           { location: { contains: search, mode: 'insensitive' } },
//           { companyName: { contains: search, mode: 'insensitive' } },
//         ],
//       }),
//       ...(category && { category }),
//       ...(location && { location }),
//       ...(employmentType && { employmentType }),
//       ...(experienceLevel && { experienceLevel }),
//     },
//   });

//   return jobPosts;
// };

// const getAllJobPosts = async (
//   filters: IJobPostFilterRequest,
//   options: IPaginationOptions,
//   priceQuery: IJobPostPriceFilters,
// ): Promise<{
//   meta: { total: number; page: number; size: number; totalPage: number };
//   data: JobPost[];
// }> => {
//   const { page, size, skip } = paginationHelpers.calculatePagination(options);
//   const { search, ...filtersData } = filters;

//   const andConditions = [];

//   // Salary filtering logic
//   if (
//     priceQuery.minSalary !== undefined &&
//     priceQuery.maxSalary !== undefined
//   ) {
//     andConditions.push({
//       salary: {
//         gte: priceQuery.minSalary,
//         lte: priceQuery.maxSalary,
//       },
//     });
//   } else if (priceQuery.minSalary !== undefined) {
//     andConditions.push({
//       salary: {
//         gte: priceQuery.minSalary,
//       },
//     });
//   } else if (priceQuery.maxSalary !== undefined) {
//     andConditions.push({
//       salary: {
//         lte: priceQuery.maxSalary,
//       },
//     });
//   }

//   // Search logic
//   if (search) {
//     andConditions.push({
//       OR: JobPostSearchableFields.map(field => ({
//         [field]: {
//           contains: search,
//           mode: 'insensitive',
//         },
//       })),
//     });
//   }

//   // Filtering based on other fields
//   if (Object.keys(filtersData).length > 0) {
//     andConditions.push({
//       AND: Object.keys(filtersData).map(key => ({
//         [key]: {
//           equals: (filtersData as any)[key],
//         },
//       })),
//     });
//   }

//   const whereConditions =
//     andConditions.length > 0 ? { AND: andConditions } : {};

//   const jobPosts = await prisma.jobPost.findMany({
//     where: whereConditions,
//     skip,
//     take: size,
//     orderBy:
//       options.sortBy && options.sortOrder
//         ? { [options.sortBy]: options.sortOrder }
//         : { createdAt: 'desc' },
//   });

//   const total = await prisma.jobPost.count({ where: whereConditions });
//   const totalPage = Math.ceil(total / size);

//   return {
//     meta: {
//       total,
//       page,
//       size,
//       totalPage,
//     },
//     data: jobPosts,
//   };
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

  // Salary filtering logic with type conversion
  if (
    priceQuery.minSalary !== undefined &&
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
    }
  } else if (priceQuery.minSalary !== undefined) {
    const minSalary = Number(priceQuery.minSalary);

    if (!isNaN(minSalary)) {
      andConditions.push({
        salary: {
          gte: minSalary,
        },
      });
    }
  } else if (priceQuery.maxSalary !== undefined) {
    const maxSalary = Number(priceQuery.maxSalary);

    if (!isNaN(maxSalary)) {
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

// Get a single job post by ID
const getSingleJobPost = async (id: string): Promise<JobPost | null> => {
  return prisma.jobPost.findUnique({ where: { id } });
};

// Create a new job post
const createJobPost = async (data: Partial<IJobPost>): Promise<JobPost> => {
  return prisma.jobPost.create({
    data,
  });
};

// Update a single job post by ID
const updateSingleJobPost = async (
  id: string,
  data: Partial<IJobPost>,
): Promise<JobPost | null> => {
  return prisma.jobPost.update({
    where: { id },
    data,
  });
};

// Delete a single job post by ID
const deleteSingleJobPost = async (id: string): Promise<JobPost | null> => {
  return prisma.jobPost.delete({
    where: { id },
  });
};

export const JobPostService = {
  getAllJobPosts,
  getSingleJobPost,
  createJobPost,
  updateSingleJobPost,
  deleteSingleJobPost,
};
