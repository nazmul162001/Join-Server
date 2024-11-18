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
exports.GoogleAuthController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const google_service_1 = require("./google.service");
// const authenticate = catchAsync(async (req: Request, res: Response) => {
//   const { token } = req.body;
//   if (!token) {
//     return res.status(400).json({
//       statusCode: 400,
//       message: 'Google token is required',
//       success: false,
//     });
//   }
//   const jwtToken = await GoogleAuthService.authenticateGoogleUser(token);
//   sendResponse(res, {
//     statusCode: 200,
//     message: 'User authenticated successfully via Google',
//     success: true,
//     token: jwtToken,
//   });
// });
const authenticate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    if (!token) {
        return (0, sendResponse_1.default)(res, {
            statusCode: 400,
            message: 'Google token is required',
            success: false,
        });
    }
    try {
        const jwtToken = yield google_service_1.GoogleAuthService.authenticateGoogleUser(token);
        (0, sendResponse_1.default)(res, {
            statusCode: 200,
            message: 'User authenticated successfully via Google',
            success: true,
            // @ts-ignore
            token: jwtToken,
        });
    }
    catch (error) {
        (0, sendResponse_1.default)(res, {
            // @ts-ignore
            statusCode: error.statusCode || 500,
            // @ts-ignore
            message: error.message,
            success: false,
        });
    }
}));
exports.GoogleAuthController = {
    authenticate,
};
