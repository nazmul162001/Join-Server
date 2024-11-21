export interface IPreferences {
  id: string;
  areasOfInterest?: string[];
  careerInterests?: string[];
  currentlyLookingFor?: string[];
  workModes?: string[];
  jobType?: string[];
  preferredIndustries?: string[];
  preferredLocations?: string[];
  salaryExpectationRange?: string;
  openToRelocation?: boolean;
  remoteWorkPreference?: boolean;
  companySizePreference?: string[];
  employmentLevel?: string[];
  desiredJobTitles?: string[];
  skillImprovementAreas?: string[];
  preferredWorkEnvironment?: string;
  availableStartDate?: Date;
  preferredLanguages?: string[];
  candidateId?: string;
}
