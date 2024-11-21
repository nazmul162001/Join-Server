import { Preferences, Prisma } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createPreference = async (
  data: Omit<Prisma.PreferencesCreateInput, 'candidate'> & {
    candidateId: string;
  },
): Promise<Preferences> => {
  const { candidateId, ...preferenceData } = data;

  const candidateExists = await prisma.candidateProfile.findUnique({
    where: { id: candidateId },
  });

  if (!candidateExists) {
    throw new Error('Candidate ID does not exist');
  }

  const preference = await prisma.preferences.create({
    data: {
      ...preferenceData,
      candidate: {
        connect: { id: candidateId },
      },
    },
    include: {
      candidate: true,
    },
  });

  return preference;
};

const getPreference = async (id: string): Promise<Preferences | null> => {
  const preference = await prisma.preferences.findUnique({
    where: { id },
    include: {
      candidate: true,
    },
  });
  return preference;
};

const updatePreference = async (
  id: string,
  data: Partial<Prisma.PreferencesUpdateInput>,
): Promise<Preferences | null> => {
  const preference = await prisma.preferences.update({
    where: { id },
    data,
    include: {
      candidate: true,
    },
  });
  return preference;
};

const deletePreference = async (id: string): Promise<Preferences> => {
  const preference = await prisma.preferences.delete({
    where: { id },
  });
  return preference;
};

const getAllPreferences = async (): Promise<Preferences[]> => {
  const preferences = await prisma.preferences.findMany({
    include: {
      candidate: true,
    },
  });
  return preferences;
};

export const PreferenceService = {
  createPreference,
  getPreference,
  updatePreference,
  deletePreference,
  getAllPreferences,
};
