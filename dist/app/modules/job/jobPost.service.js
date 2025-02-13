"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const jobPost_interface_1 = require("./jobPost.interface");
const createJobPost = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const jobPost = yield prisma_1.default.jobPost.create({
        data,
    });
    return jobPost;
});
const getJobPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jobPost = yield prisma_1.default.jobPost.findUnique({
        where: { id },
    });
    return jobPost;
});
const updateJobPost = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const jobPost = yield prisma_1.default.jobPost.update({
        where: { id },
        data,
    });
    return jobPost;
});
const deleteJobPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const jobPost = yield prisma_1.default.jobPost.delete({
        where: { id },
    });
    return jobPost;
});
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
//     priceQuery.minSalary !== undefined ||
//     priceQuery.maxSalary !== undefined
//   ) {
//     const minSalary = Number(priceQuery.minSalary);
//     const maxSalary = Number(priceQuery.maxSalary);
//     if (!isNaN(minSalary) && !isNaN(maxSalary)) {
//       andConditions.push({
//         salary: {
//           gte: minSalary,
//           lte: maxSalary,
//         },
//       });
//     } else if (!isNaN(minSalary)) {
//       andConditions.push({
//         salary: {
//           gte: minSalary,
//         },
//       });
//     } else if (!isNaN(maxSalary)) {
//       andConditions.push({
//         salary: {
//           lte: maxSalary,
//         },
//       });
//     }
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
//   // Additional filters
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
//         : { postedAt: 'desc' },
//     include: {
//       applications: true,
//     },
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
const getAllJobPosts = (filters, options, priceQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, size, skip } = paginationHelper_1.paginationHelpers.calculatePagination(options);
    const { search } = filters, filtersData = __rest(filters, ["search"]);
    const andConditions = [];
    // ✅ Salary filtering logic (existing logic unchanged)
    if (priceQuery.minSalary !== undefined ||
        priceQuery.maxSalary !== undefined) {
        const minSalary = Number(priceQuery.minSalary);
        const maxSalary = Number(priceQuery.maxSalary);
        if (!isNaN(minSalary) && !isNaN(maxSalary)) {
            andConditions.push({
                minSalary: { gte: minSalary },
                maxSalary: { lte: maxSalary },
            });
        }
        else if (!isNaN(minSalary)) {
            andConditions.push({ minSalary: { gte: minSalary } });
        }
        else if (!isNaN(maxSalary)) {
            andConditions.push({ maxSalary: { lte: maxSalary } });
        }
    }
    // ✅ Search logic (unchanged)
    if (search) {
        andConditions.push({
            OR: jobPost_interface_1.JobPostSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive',
                },
            })),
        });
    }
    // ✅ Additional filters (unchanged)
    if (Object.keys(filtersData).length > 0) {
        andConditions.push({
            AND: Object.keys(filtersData).map(key => ({
                [key]: {
                    equals: filtersData[key],
                },
            })),
        });
    }
    // ✅ New filters added for experienceLevel, country, city, jobType
    if (filters.experienceLevel) {
        andConditions.push({ experienceLevel: filters.experienceLevel });
    }
    if (filters.country) {
        andConditions.push({ country: filters.country });
    }
    // if (filters.city) {
    //   andConditions.push({ city: filters.city });
    // }
    if (filters.jobType) {
        andConditions.push({ jobType: filters.jobType });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const jobPosts = yield prisma_1.default.jobPost.findMany({
        // @ts-ignore
        where: whereConditions,
        skip,
        take: size,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : { postedAt: 'desc' },
        include: {
            applications: true,
        },
    });
    // @ts-ignore
    const total = yield prisma_1.default.jobPost.count({ where: whereConditions });
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
});
exports.JobPostService = {
    createJobPost,
    getJobPost,
    updateJobPost,
    deleteJobPost,
    getAllJobPosts,
};
