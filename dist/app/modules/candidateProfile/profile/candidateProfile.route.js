"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../../enums/user");
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const candidateProfile_controller_1 = require("./candidateProfile.controller");
const router = express_1.default.Router();
// user routes
router.get('/user-profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.HR, user_1.ENUM_USER_ROLE.CANDIDATE), candidateProfile_controller_1.CandidateProfileController.getAllCandidateProfiles);
router.get('/:id', candidateProfile_controller_1.CandidateProfileController.getSingleCandidateProfile);
router.post('/create-profile', candidateProfile_controller_1.CandidateProfileController.createCandidateProfile);
router.patch('/:id', candidateProfile_controller_1.CandidateProfileController.updateCandidateProfile);
router.delete('/:id', candidateProfile_controller_1.CandidateProfileController.deleteCandidateProfile);
exports.CandidateProfileRoutes = router;
