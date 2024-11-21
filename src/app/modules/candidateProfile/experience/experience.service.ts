import { Prisma, WorkExperience } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createExperience = async (
  data: Omit<Prisma.WorkExperienceCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<WorkExperience> => {
  const { candidateId, ...experienceData } = data;

  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const experience = await prisma.workExperience.create({
    data: {
      ...experienceData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return experience;
};

const getExperience = async (id: string): Promise<WorkExperience | null> => {
  const experience = await prisma.workExperience.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return experience;
};

const updateExperience = async (
  id: string,
  data: Partial<Prisma.WorkExperienceUpdateInput>,
): Promise<WorkExperience | null> => {
  const experience = await prisma.workExperience.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return experience;
};

const deleteExperience = async (id: string): Promise<WorkExperience> => {
  const experience = await prisma.workExperience.delete({
    where: { id },
  });
  return experience;
};

const getAllExperiences = async (): Promise<WorkExperience[]> => {
  const experiences = await prisma.workExperience.findMany({
    include: {
      candidate: true,
    },
  });
  return experiences;
};

export const WorkExperienceService = {
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
  getAllExperiences,
};
