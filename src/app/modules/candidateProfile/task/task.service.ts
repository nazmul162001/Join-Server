import { Prisma, SendTask } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createTask = async (
  data: Omit<Prisma.SendTaskCreateInput, 'candidate'> & { candidateId: string },
): Promise<SendTask> => {
  const { candidateId, ...taskData } = data;

  // Check if the candidate exists
  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  // Create the task
  const task = await prisma.sendTask.create({
    data: {
      ...taskData,
      candidate: {
        connect: { id: candidateId }, // Use connect to link the candidate
      },
    },
    include: {
      candidate: true, // Include related candidate
    },
  });

  return task;
};

const getTask = async (id: string): Promise<SendTask | null> => {
  const task = await prisma.sendTask.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return task;
};

const updateTask = async (
  id: string,
  data: Partial<Prisma.SendTaskUpdateInput>,
): Promise<SendTask | null> => {
  const task = await prisma.sendTask.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return task;
};

const deleteTask = async (id: string): Promise<SendTask> => {
  const task = await prisma.sendTask.delete({
    where: { id },
  });
  return task;
};

const getAllTasks = async (): Promise<SendTask[]> => {
  const tasks = await prisma.sendTask.findMany({
    include: {
      candidate: true,
    },
  });
  return tasks;
};

export const TaskService = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
};
