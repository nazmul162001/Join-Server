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
exports.ApplyService = void 0;
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Get all applications
const getAllApplications = () => __awaiter(void 0, void 0, void 0, function* () {
    const applications = yield prisma_1.default.applyJob.findMany({
        include: {
            user: true, // Include related user
            jobPost: true, // Include related job post
        },
    });
    return applications;
});
// Get single application
const getSingleApplication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const application = yield prisma_1.default.applyJob.findUnique({
        where: { id },
        include: {
            user: true, // Include related user
            jobPost: true, // Include related job post
        },
    });
    if (!application) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Application not found');
    }
    return application;
});
// Create a new application
const createApplication = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const application = yield prisma_1.default.applyJob.create({
        // @ts-ignore
        data,
        include: {
            user: true, // Include related user
            jobPost: true, // Include related job post
        },
    });
    return application;
});
// Update single application
const updateApplication = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedApplication = yield prisma_1.default.applyJob.update({
        where: { id },
        data,
        include: {
            user: true, // Include related user
            jobPost: true, // Include related job post
        },
    });
    if (!updatedApplication) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Application not found');
    }
    return updatedApplication;
});
// Delete single application
const deleteApplication = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedApplication = yield prisma_1.default.applyJob.delete({
        where: { id },
        include: {
            user: true, // Include related user
            jobPost: true, // Include related job post
        },
    });
    if (!deletedApplication) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Application not found');
    }
    return deletedApplication;
});
exports.ApplyService = {
    getAllApplications,
    getSingleApplication,
    createApplication,
    updateApplication,
    deleteApplication,
};
