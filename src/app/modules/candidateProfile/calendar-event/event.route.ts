import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { CalendarEventController } from './event.controller';
import { CalendarEventValidation } from './event.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CalendarEventValidation.calendarEventValidationSchema),
  CalendarEventController.createEvent,
);

router.get('/', CalendarEventController.getAllEvents);

router.get('/:id', CalendarEventController.getEvent);

router.patch(
  '/:id',
  validateRequest(CalendarEventValidation.calendarEventValidationSchema),
  CalendarEventController.updateEvent,
);

router.delete('/:id', CalendarEventController.deleteEvent);

export const CalendarEventRoutes = router;
