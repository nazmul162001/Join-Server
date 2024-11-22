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
exports.CandidateProfileController = void 0;
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../../shared/sendResponse"));
const candidateProfile_service_1 = require("./candidateProfile.service");
const createCandidateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield candidateProfile_service_1.CandidateProfileService.createCandidateProfile(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        message: 'Candidate profile created successfully',
        data: result,
        success: true,
    });
}));
const getAllCandidateProfiles = (0, catchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield candidateProfile_service_1.CandidateProfileService.getAllCandidateProfiles();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Candidate profiles retrieved successfully',
        data: profiles,
    });
}));
const getSingleCandidateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const profile = yield candidateProfile_service_1.CandidateProfileService.getSingleCandidateProfile(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Candidate profile retrieved successfully',
        data: profile,
    });
}));
const updateCandidateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const updatedProfile = yield candidateProfile_service_1.CandidateProfileService.updateCandidateProfile(id, body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Candidate profile updated successfully',
        data: updatedProfile,
    });
}));
const deleteCandidateProfile = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedProfile = yield candidateProfile_service_1.CandidateProfileService.deleteCandidateProfile(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Candidate profile deleted successfully',
        data: deletedProfile,
    });
}));
exports.CandidateProfileController = {
    createCandidateProfile,
    getAllCandidateProfiles,
    getSingleCandidateProfile,
    updateCandidateProfile,
    deleteCandidateProfile,
};
