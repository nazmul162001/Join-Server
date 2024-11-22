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
exports.JobPostService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
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
const getAllJobPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const jobPosts = yield prisma_1.default.jobPost.findMany();
    return jobPosts;
});
exports.JobPostService = {
    createJobPost,
    getJobPost,
    updateJobPost,
    deleteJobPost,
    getAllJobPosts,
};
