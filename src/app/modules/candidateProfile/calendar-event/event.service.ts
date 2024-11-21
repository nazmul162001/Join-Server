import { CalendarEvent, Prisma } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createEvent = async (
  data: Omit<Prisma.CalendarEventCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<CalendarEvent> => {
  const { candidateId, ...eventData } = data;

  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const event = await prisma.calendarEvent.create({
    data: {
      ...eventData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return event;
};

const getEvent = async (id: string): Promise<CalendarEvent | null> => {
  const event = await prisma.calendarEvent.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return event;
};

const updateEvent = async (
  id: string,
  data: Partial<Prisma.CalendarEventUpdateInput>,
): Promise<CalendarEvent | null> => {
  const event = await prisma.calendarEvent.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return event;
};

const deleteEvent = async (id: string): Promise<CalendarEvent> => {
  const event = await prisma.calendarEvent.delete({
    where: { id },
  });
  return event;
};

const getAllEvents = async (): Promise<CalendarEvent[]> => {
  const events = await prisma.calendarEvent.findMany({
    include: {
      candidate: true,
    },
  });
  return events;
};

export const CalendarEventService = {
  createEvent,
  getEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
};
