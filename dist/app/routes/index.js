"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apply_route_1 = require("../modules/apply/apply.route");
const auth_route_1 = require("../modules/auth/auth.route");
const google_route_1 = require("../modules/google/google.route");
const jobPost_route_1 = require("../modules/job/jobPost.route");
const service_route_1 = require("../modules/service/service.route");
const user_route_1 = require("../modules/users/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/google',
        route: google_route_1.googleRoutes,
    },
    {
        path: '/services',
        route: service_route_1.ServiceRoute,
    },
    {
        path: '/job',
        route: jobPost_route_1.JobPostRoutes,
    },
    {
        path: '/job',
        route: apply_route_1.ApplyJobRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
