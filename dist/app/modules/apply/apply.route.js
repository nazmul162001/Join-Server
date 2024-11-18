"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyJobRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const apply_controller_1 = require("./apply.controller");
const router = express_1.default.Router();
// Job post routes
router.get('/apply', apply_controller_1.ApplyController.getAllApplications);
router.get('/apply/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CANDIDATE), apply_controller_1.ApplyController.getSingleApplication);
router.post('/apply', (0, auth_1.default)(user_1.ENUM_USER_ROLE.CANDIDATE), apply_controller_1.ApplyController.createApplication);
router.patch('/apply/:id', 
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
apply_controller_1.ApplyController.updateApplication);
router.delete('/apply/:id', 
//   auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.HR),
apply_controller_1.ApplyController.deleteApplication);
exports.ApplyJobRoutes = router;
