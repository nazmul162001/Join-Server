import { CandidateProfile, Prisma } from '@prisma/client';
import prisma from '../../../../shared/prisma';

const createCandidateProfile = async (
  data: Prisma.CandidateProfileCreateInput & { candidateId?: string },
): Promise<CandidateProfile> => {
  const { candidateId, profileCompletion, ...fields } = data;

  // Define the fields that contribute to profileCompletion
  const totalFields = [
    'name',
    'location',
    'primaryRole',
    'yearsOfExperience',
    'openToRoles',
    'bio',
    'website',
    'linkedin',
    'github',
    'twitter',
    'resume',
    'skills',
    'achievements',
    'pronouns',
    'genderIdentity',
    'ethnicity',
  ];

  // Count how many of the fields provided in the request are non-empty
  const filledFields = totalFields.filter(field => {
    const value = fields[field as keyof typeof fields];
    if (Array.isArray(value)) {
      return value.length > 0; // Check non-empty arrays
    }
    return value !== null && value !== undefined && value !== ''; // Check non-empty strings and values
  }).length;

  // Calculate profile completion percentage
  const calculatedProfileCompletion = Math.floor(
    (filledFields / totalFields.length) * 100,
  );

  // Use the provided profileCompletion if given, else use the calculated value
  const finalProfileCompletion =
    profileCompletion ?? calculatedProfileCompletion;

  // Create the candidate profile
  const result = await prisma.candidateProfile.create({
    // @ts-ignore
    data: {
      ...fields,
      profileCompletion: finalProfileCompletion,
      candidate: candidateId
        ? {
            connect: { id: candidateId }, // Connect the related User by id
          }
        : undefined,
    },
    include: {
      tasks: true,
      recommendations: true,
      history: true,
      education: true,
      workExperience: true,
      calendarEvents: true,
      applications: true,
      preferences: true,
    },
  });

  return result;
};

const getAllCandidateProfiles = async (): Promise<CandidateProfile[]> => {
  const profiles = await prisma.candidateProfile.findMany({
    include: {
      tasks: true,
      recommendations: true,
      history: true,
      education: true,
      workExperience: true,
      calendarEvents: true,
      applications: true,
      preferences: true,
      candidate: true,
    },
  });
  return profiles;
};

const getSingleCandidateProfile = async (
  id: string,
): Promise<CandidateProfile | null> => {
  const profile = await prisma.candidateProfile.findUnique({
    where: { id },
    include: {
      tasks: true,
      recommendations: true,
      history: true,
      education: true,
      workExperience: true,
      calendarEvents: true,
      applications: true,
      preferences: true,
    },
  });
  return profile;
};

const updateCandidateProfile = async (
  id: string,
  data: Partial<Prisma.CandidateProfileUpdateInput>,
): Promise<CandidateProfile | null> => {
  const updatedProfile = await prisma.candidateProfile.update({
    where: { id },
    data,
    include: {
      tasks: true,
      recommendations: true,
      history: true,
      education: true,
      workExperience: true,
      calendarEvents: true,
      applications: true,
      preferences: true,
    },
  });
  return updatedProfile;
};

const deleteCandidateProfile = async (
  id: string,
): Promise<CandidateProfile> => {
  const deletedProfile = await prisma.candidateProfile.delete({
    where: { id },
  });
  return deletedProfile;
};

export const CandidateProfileService = {
  createCandidateProfile,
  getAllCandidateProfiles,
  getSingleCandidateProfile,
  updateCandidateProfile,
  deleteCandidateProfile,
};
