"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// user routes
router.get('/users', user_controller_1.UserController.getAllUsers);
router.get('/profile', 
// auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CANDIDATE),
user_controller_1.UserController.getUserProfile);
router.get('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CANDIDATE), user_controller_1.UserController.getSingleUser);
router.patch('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CANDIDATE), user_controller_1.UserController.updateSingleUser);
router.delete('/users/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.CANDIDATE), user_controller_1.UserController.deleteSingleUser);
// get current log in user
router.post('/current-user', user_controller_1.UserController.getLoggedInUser);
// authentication
// router.post('/signup', UserController.createUser);
// router.post('/signin', UserController.loginUser);
exports.UserRoutes = router;
