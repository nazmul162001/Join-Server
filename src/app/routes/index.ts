import express from 'express';
import { ApplyJobRoutes } from '../modules/apply/apply.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CalendarEventRoutes } from '../modules/candidateProfile/calendar-event/event.route';
import { CandidateEducationRoutes } from '../modules/candidateProfile/education/education.route';
import { WorkExperienceRoutes } from '../modules/candidateProfile/experience/experience.route';
import { HistoryRoutes } from '../modules/candidateProfile/history/history.route';
import { PreferenceRoutes } from '../modules/candidateProfile/preferrence/preferrence.route';
import { CandidateProfileRoutes } from '../modules/candidateProfile/profile/candidateProfile.route';
import { RecommendationRoutes } from '../modules/candidateProfile/recommendation/recommendation.route';
import { TaskRoutes } from '../modules/candidateProfile/task/task.route';
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
  // {
  //   path: '/google',
  //   route: googleRoutes,
  // },
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
  {
    path: '/profile',
    route: CandidateProfileRoutes,
  },
  {
    path: '/task',
    route: TaskRoutes,
  },
  {
    path: '/recommendation',
    route: RecommendationRoutes,
  },
  {
    path: '/history',
    route: HistoryRoutes,
  },
  {
    path: '/education',
    route: CandidateEducationRoutes,
  },
  {
    path: '/experience',
    route: WorkExperienceRoutes,
  },
  {
    path: '/calendar-event',
    route: CalendarEventRoutes,
  },
  {
    path: '/preferences',
    route: PreferenceRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
