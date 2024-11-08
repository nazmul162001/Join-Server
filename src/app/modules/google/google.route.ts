// import express from 'express';
// import { GoogleAuthController } from './google.controller';
// const router = express.Router();

// router.post('/login', GoogleAuthController.authenticate);

// export const GoogleRoutes = router;

// // src/app/routes/index.ts
// import express from 'express';
// import { AuthRoutes } from '../modules/auth/auth.route';
// import { ServiceRoute } from '../modules/service/service.route';
// import { UserRoutes } from '../modules/users/user.route';
// import { GoogleRoutes } from '../modules/google/google.route';

// const router = express.Router();

// const moduleRoutes = [
//   {
//     path: '/auth',
//     route: AuthRoutes,
//   },
//   {
//     path: '/google',
//     route: GoogleRoutes,
//   },
//   {
//     path: '/',
//     route: UserRoutes,
//   },
//   {
//     path: '/services',
//     route: ServiceRoute,
//   },
// ];

// moduleRoutes.forEach(route => router.use(route.path, route.route));
// export default router;

import express from 'express';
// import { ENUM_USER_ROLE } from '../../../enums/user';
// import auth from '../../middlewares/auth';
import { GoogleAuthController } from './google.controller';
const router = express.Router();

router.post('/login', GoogleAuthController.authenticate);

export const googleRoutes = router;
