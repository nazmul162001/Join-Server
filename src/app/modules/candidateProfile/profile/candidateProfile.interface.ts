export interface ICandidateProfile {
  id: string;
  profileCompletion: number;
  name?: string;
  location?: string;
  primaryRole?: string;
  yearsOfExperience?: number;
  openToRoles: string[];
  bio: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  resume?: string;
  skills: string[];
  achievements?: string;
  pronouns?: string;
  genderIdentity?: string;
  ethnicity: string[];
  tasks: ISendTask[];
  recommendations: IRecommendation[];
  history: ICandidateHistory[];
  education: ICandidateEducation[];
  workExperience: IWorkExperience[];
  calendarEvents: ICalendarEvent[];
  applications: IApplyJob[];
  preferences: IPreferences[];
  candidateId: string;
  candidate: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISendTask {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  status: string;
  candidateId: string;
}

export interface IRecommendation {
  id: string;
  recommendedBy: string;
  message?: string;
  candidateId: string;
}

export interface ICandidateHistory {
  id: string;
  actionType: string;
  details: string;
  createdAt: Date;
  candidateId: string;
}

export interface ICandidateEducation {
  id: string;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade?: string;
  description?: string;
  candidateId: string;
}

export interface IWorkExperience {
  id: string;
  companyName: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  candidateId: string;
}

export interface ICalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  meetingLink?: string;
  candidateId: string;
}

export interface IPreferences {
  id: string;
  areasOfInterest: string[];
  careerInterests: string[];
  currentlyLookingFor: string[];
  workModes: string[];
  jobType: string[];
  preferredIndustries: string[];
  preferredLocations: string[];
  salaryExpectationRange?: string;
  openToRelocation: boolean;
  remoteWorkPreference: boolean;
  companySizePreference: string[];
  employmentLevel: string[];
  desiredJobTitles: string[];
  skillImprovementAreas: string[];
  preferredWorkEnvironment?: string;
  availableStartDate?: Date;
  preferredLanguages: string[];
  candidateId: string;
}

export interface IApplyJob {
  id: string;
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  portfolio: string;
  coverLetter: string;
  jobPostId: string;
  userId: string;
  candidateId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: string;
  name: string;
  profileImage: string;
  phoneNumber: string;
  applications: IApplyJob[];
  profile: ICandidateProfile[];
}
