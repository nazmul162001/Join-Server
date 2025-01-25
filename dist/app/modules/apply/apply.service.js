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
exports.ApplyService = void 0;
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// Get all applications
const getAllApplications = () => __awaiter(void 0, void 0, void 0, function* () {
    const applications = yield prisma_1.default.applyJob.findMany({
        include: {
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
    const { candidateId } = data, applicationData = __rest(data, ["candidateId"]);
    // Verify if candidate exists, if candidateId is provided
    if (candidateId) {
        const candidateExists = yield prisma_1.default.candidateProfile.findUnique({
            where: { id: candidateId },
        });
        if (!candidateExists) {
            throw new Error('Candidate ID does not exist');
        }
    }
    // Create the application
    const application = yield prisma_1.default.applyJob.create({
        // @ts-ignore
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2c9eba5530cb346bfd757c7656663078e561e113
        data: Object.assign(Object.assign({}, applicationData), { candidateId: candidateId || null }),
        include: {
            jobPost: true,
            candidate: true,
<<<<<<< HEAD
=======
=======
        data: Object.assign(Object.assign({}, applicationData), { candidate: candidateId ? { connect: { id: candidateId } } : undefined }),
        include: {
            jobPost: true,
            candidate: true, // Include candidate in the response
>>>>>>> c8827303dba647068f68428e0f1d487bdb5c3be4
>>>>>>> 2c9eba5530cb346bfd757c7656663078e561e113
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
<<<<<<< HEAD
            jobPost: true,
=======
<<<<<<< HEAD
            jobPost: true,
=======
            jobPost: true, // Include related job post
>>>>>>> c8827303dba647068f68428e0f1d487bdb5c3be4
>>>>>>> 2c9eba5530cb346bfd757c7656663078e561e113
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
