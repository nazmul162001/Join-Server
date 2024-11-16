import express from 'express';
import { ApplyJobRoutes } from '../modules/apply/apply.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { googleRoutes } from '../modules/google/google.route';
import { JobPostRoutes } from '../modules/job/jobPost.route';
import { ServiceRoute } from '../modules/service/service.route';
import { UserRoutes } from '../modules/users/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/',
    route: UserRoutes,
  },
  {
    path: '/google',
    route: googleRoutes,
  },
  {
    path: '/services',
    route: ServiceRoute,
  },
  {
    path: '/job',
    route: JobPostRoutes,
  },
  {
    path: '/job',
    route: ApplyJobRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
