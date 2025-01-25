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
exports.WorkExperienceController = void 0;
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../../shared/sendResponse"));
const experience_service_1 = require("./experience.service");
const createExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experience = yield experience_service_1.WorkExperienceService.createExperience(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Experience created successfully',
        data: experience,
    });
}));
const getExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const experience = yield experience_service_1.WorkExperienceService.getExperience(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Experience retrieved successfully',
        data: experience,
    });
}));
const updateExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedExperience = yield experience_service_1.WorkExperienceService.updateExperience(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Experience updated successfully',
        data: updatedExperience,
    });
}));
const deleteExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedExperience = yield experience_service_1.WorkExperienceService.deleteExperience(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Experience deleted successfully',
        data: deletedExperience,
    });
}));
const getAllExperiences = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experiences = yield experience_service_1.WorkExperienceService.getAllExperiences();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Experiences retrieved successfully',
        data: experiences,
    });
}));
exports.WorkExperienceController = {
    createExperience,
    getExperience,
    updateExperience,
    deleteExperience,
    getAllExperiences,
};
