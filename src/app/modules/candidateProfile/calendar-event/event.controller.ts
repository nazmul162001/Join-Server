import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import catchAsync from '../../../../shared/catchAsync';
import sendResponse from '../../../../shared/sendResponse';
import { CalendarEventService } from './event.service';

const createEvent = catchAsync(async (req: Request, res: Response) => {
  const event = await CalendarEventService.createEvent(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Event created successfully',
    data: event,
  });
});

const getEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const event = await CalendarEventService.getEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retrieved successfully',
    data: event,
  });
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedEvent = await CalendarEventService.updateEvent(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event updated successfully',
    data: updatedEvent,
  });
});

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedEvent = await CalendarEventService.deleteEvent(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event deleted successfully',
    data: deletedEvent,
  });
});

const getAllEvents = catchAsync(async (_req: Request, res: Response) => {
  const events = await CalendarEventService.getAllEvents();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Events retrieved successfully',
    data: events,
  });
});

export const CalendarEventController = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
};
