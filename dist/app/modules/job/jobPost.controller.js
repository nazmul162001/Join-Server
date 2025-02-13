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
const createJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Convert enums if necessary
    if (req.body.employmentType) {
        req.body.employmentType = req.body.employmentType.toUpperCase();
    }
    if (req.body.experienceLevel) {
        req.body.experienceLevel = req.body.experienceLevel.toUpperCase();
    }
    if (req.body.salaryType) {
        req.body.salaryType = req.body.salaryType.toUpperCase();
    }
    if (req.body.currency) {
        req.body.currency = req.body.currency.toUpperCase();
    }
    if (req.body.status) {
        req.body.status = req.body.status.toUpperCase();
    }
    if (req.body.jobType) {
        req.body.jobType = req.body.jobType.toUpperCase();
    }
    const jobPost = yield jobPost_service_1.JobPostService.createJobPost(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Job Post created successfully',
        data: jobPost,
    });
}));
const getJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const jobPost = yield jobPost_service_1.JobPostService.getJobPost(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job Post retrieved successfully',
        data: jobPost,
    });
}));
const updateJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedJobPost = yield jobPost_service_1.JobPostService.updateJobPost(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job Post updated successfully',
        data: updatedJobPost,
    });
}));
const deleteJobPost = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedJobPost = yield jobPost_service_1.JobPostService.deleteJobPost(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Job Post deleted successfully',
        data: deletedJobPost,
    });
}));
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
exports.JobPostController = {
    createJobPost,
    getJobPost,
    updateJobPost,
    deleteJobPost,
    getAllJobPosts,
};
