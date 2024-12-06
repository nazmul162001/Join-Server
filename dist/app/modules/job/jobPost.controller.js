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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostController = void 0;
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const pagination_1 = require("../../../constants/pagination");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const jobPost_interface_1 = require("./jobPost.interface");
const jobPost_service_1 = require("./jobPost.service");
// Get all job posts with filtering
const getAllJobPosts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, jobPost_interface_1.JobPostFilterableFields);
    const priceQuery = (0, pick_1.default)(req.query, jobPost_interface_1.JobPostPriceSearchableFields);
    const options = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const jobPosts = yield jobPost_service_1.JobPostService.getAllJobPosts(filters, options, priceQuery);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All job posts retrieved successfully',
        meta: jobPosts.meta,
        data: jobPosts.data,
    });
}));
// Get a single job post by ID
const getSingleJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jobPost = yield jobPost_service_1.JobPostService.getSingleJobPost(id);
    if (!jobPost) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Job post not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job post retrieved successfully',
        data: jobPost,
    });
}));
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
const createJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const jobPostData = Object.assign(Object.assign({}, req.body), { skill: JSON.stringify(req.body.skill), perks: req.body.perks ? JSON.stringify(req.body.perks) : undefined, assessment: req.body.assessment
            ? JSON.stringify(req.body.assessment)
            : undefined });
    const newJobPost = yield jobPost_service_1.JobPostService.createJobPost(jobPostData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Job post created successfully',
        data: newJobPost,
    });
}));
// Update a single job post by ID
const updateSingleJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jobPostData = req.body;
    const updatedJobPost = yield jobPost_service_1.JobPostService.updateSingleJobPost(id, jobPostData);
    if (!updatedJobPost) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Job post not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job post updated successfully',
        data: updatedJobPost,
    });
}));
// Delete a single job post by ID
const deleteSingleJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedJobPost = yield jobPost_service_1.JobPostService.deleteSingleJobPost(id);
    if (!deletedJobPost) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Job post not found',
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job post deleted successfully',
        data: deletedJobPost,
    });
}));
exports.JobPostController = {
    getAllJobPosts,
    getSingleJobPost,
    createJobPost,
    updateSingleJobPost,
    deleteSingleJobPost,
};
