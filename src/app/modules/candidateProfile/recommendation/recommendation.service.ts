import { Prisma, Recommendation } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createRecommendation = async (
  data: Omit<Prisma.RecommendationCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<Recommendation> => {
  const { candidateId, ...recommendationData } = data;

  // check candidate exists
  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const recommendation = await prisma.recommendation.create({
    data: {
      ...recommendationData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return recommendation;
};

const getRecommendation = async (
  id: string,
): Promise<Recommendation | null> => {
  const recommendation = await prisma.recommendation.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return recommendation;
};

const updateRecommendation = async (
  id: string,
  data: Partial<Prisma.RecommendationUpdateInput>,
): Promise<Recommendation | null> => {
  const recommendation = await prisma.recommendation.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return recommendation;
};

const deleteRecommendation = async (id: string): Promise<Recommendation> => {
  const recommendation = await prisma.recommendation.delete({
    where: { id },
  });
  return recommendation;
};

const getAllRecommendations = async (): Promise<Recommendation[]> => {
  const recommendations = await prisma.recommendation.findMany({
    include: {
      candidate: true,
    },
  });
  return recommendations;
};

export const RecommendationService = {
  createRecommendation,
  getRecommendation,
  updateRecommendation,
  deleteRecommendation,
  getAllRecommendations,
};
