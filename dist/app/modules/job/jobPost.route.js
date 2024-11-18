"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const jobPost_controller_1 = require("./jobPost.controller");
const router = express_1.default.Router();
// Job post routes
router.get('/jobposts', jobPost_controller_1.JobPostController.getAllJobPosts);
router.get('/jobposts/:id', 
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
jobPost_controller_1.JobPostController.getSingleJobPost);
router.post('/jobposts', (0, auth_1.default)(user_1.ENUM_USER_ROLE.HR), jobPost_controller_1.JobPostController.createJobPost);
router.patch('/jobposts/:id', 
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
jobPost_controller_1.JobPostController.updateSingleJobPost);
router.delete('/jobposts/:id', 
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
jobPost_controller_1.JobPostController.deleteSingleJobPost);
exports.JobPostRoutes = router;
