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
exports.GoogleAuthService = void 0;
const google_auth_library_1 = require("google-auth-library");
// @ts-ignore
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
const authenticateGoogleUser = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tokenInfo = yield client.getTokenInfo(token);
        // @ts-ignore
        const { email, name, sub: externalId } = tokenInfo;
        if (!email) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Email not provided by Google');
        }
        // @ts-ignore
        let user = yield prisma_1.default.user.findUnique({ where: { externalId } });
        if (!user) {
            user = yield prisma_1.default.user.create({
                data: {
                    email,
                    name: name || '',
                    // @ts-ignore
                    externalId,
                    password: '',
                },
            });
        }
        const jwtToken = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, config_1.default.jwt.secret, { expiresIn: config_1.default.jwt.expires_in });
        return jwtToken;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 
        // @ts-ignore
        'Error verifying Google token: ' + error.message);
    }
});
exports.GoogleAuthService = {
    authenticateGoogleUser,
};
