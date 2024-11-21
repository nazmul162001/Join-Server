import { CandidateEducation, Prisma } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createEducation = async (
  data: Omit<Prisma.CandidateEducationCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<CandidateEducation> => {
  const { candidateId, ...educationData } = data;

  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const education = await prisma.candidateEducation.create({
    data: {
      ...educationData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return education;
};

const getEducation = async (id: string): Promise<CandidateEducation | null> => {
  const education = await prisma.candidateEducation.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return education;
};

const updateEducation = async (
  id: string,
  data: Partial<Prisma.CandidateEducationUpdateInput>,
): Promise<CandidateEducation | null> => {
  const education = await prisma.candidateEducation.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return education;
};

const deleteEducation = async (id: string): Promise<CandidateEducation> => {
  const education = await prisma.candidateEducation.delete({
    where: { id },
  });
  return education;
};

const getAllEducations = async (): Promise<CandidateEducation[]> => {
  const educations = await prisma.candidateEducation.findMany({
    include: {
      candidate: true,
    },
  });
  return educations;
};

export const CandidateEducationService = {
  createEducation,
  getEducation,
  updateEducation,
  deleteEducation,
  getAllEducations,
};
