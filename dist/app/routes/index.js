"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apply_route_1 = require("../modules/apply/apply.route");
const auth_route_1 = require("../modules/auth/auth.route");
const event_route_1 = require("../modules/candidateProfile/calendar-event/event.route");
const education_route_1 = require("../modules/candidateProfile/education/education.route");
const experience_route_1 = require("../modules/candidateProfile/experience/experience.route");
const history_route_1 = require("../modules/candidateProfile/history/history.route");
const preferrence_route_1 = require("../modules/candidateProfile/preferrence/preferrence.route");
const candidateProfile_route_1 = require("../modules/candidateProfile/profile/candidateProfile.route");
const recommendation_route_1 = require("../modules/candidateProfile/recommendation/recommendation.route");
const task_route_1 = require("../modules/candidateProfile/task/task.route");
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
    {
        path: '/profile',
        route: candidateProfile_route_1.CandidateProfileRoutes,
    },
    {
        path: '/task',
        route: task_route_1.TaskRoutes,
    },
    {
        path: '/recommendation',
        route: recommendation_route_1.RecommendationRoutes,
    },
    {
        path: '/history',
        route: history_route_1.HistoryRoutes,
    },
    {
        path: '/education',
        route: education_route_1.CandidateEducationRoutes,
    },
    {
        path: '/experience',
        route: experience_route_1.WorkExperienceRoutes,
    },
    {
        path: '/calendar-event',
        route: event_route_1.CalendarEventRoutes,
    },
    {
        path: '/preferences',
        route: preferrence_route_1.PreferenceRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
