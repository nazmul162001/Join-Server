import { CandidateHistory, Prisma } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createHistory = async (
  data: Omit<Prisma.CandidateHistoryCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<CandidateHistory> => {
  const { candidateId, ...historyData } = data;

  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const history = await prisma.candidateHistory.create({
    data: {
      ...historyData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return history;
};

const getHistory = async (id: string): Promise<CandidateHistory | null> => {
  const history = await prisma.candidateHistory.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return history;
};

const updateHistory = async (
  id: string,
  data: Partial<Prisma.CandidateHistoryUpdateInput>,
): Promise<CandidateHistory | null> => {
  const history = await prisma.candidateHistory.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return history;
};

const deleteHistory = async (id: string): Promise<CandidateHistory> => {
  const history = await prisma.candidateHistory.delete({
    where: { id },
  });
  return history;
};

const getAllHistories = async (): Promise<CandidateHistory[]> => {
  const histories = await prisma.candidateHistory.findMany({
    include: {
      candidate: true,
    },
  });
  return histories;
};

export const HistoryService = {
  createHistory,
  getHistory,
  updateHistory,
  deleteHistory,
  getAllHistories,
};
