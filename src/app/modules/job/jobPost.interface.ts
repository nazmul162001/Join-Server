export type IJobPost = {
  id: string;
  title: string;
  responsibilities: string;
  description: string; // Added missing 'description' field
  category: string;
  skill: string;
  duration: string;
  perks?: string;
  coverLetter?: string;
  availability: string;
  assessment?: string;
  vacancy: number;
  location: string;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salary?: number;
  salaryType?: SalaryType;
  currency?: CurrencyType;
  status: JobStatus;
  jobType: JobType; // Added new jobType field
  remote: boolean;
  companyName: string;
  postedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type IJobPostFilterRequest = {
  search?: string;
  category?: string;
  location?: string;
  employmentType?: EmploymentType;
  experienceLevel?: ExperienceLevel;
  salary?: number;
  currency?: CurrencyType;
  status?: JobStatus;
  jobType?: JobType; // Added jobType filter
  remote?: boolean;
  country?: string;
  city?: string;
};

// Updated Enums with JobType
export enum EmploymentType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  TEMPORARY = 'TEMPORARY',
  INTERNSHIP = 'INTERNSHIP',
  FREELANCE = 'FREELANCE',
}

export enum ExperienceLevel {
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
  LEAD = 'LEAD',
  EXECUTIVE = 'EXECUTIVE',
  DIRECTOR = 'DIRECTOR',
  HR = 'HR',
}

export enum SalaryType {
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export enum CurrencyType {
  USD = 'USD',
  BDT = 'BDT',
  EUR = 'EUR',
  GBP = 'GBP',
  AUD = 'AUD',
}

export enum JobStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  CLOSED = 'CLOSED',
}

export enum JobType {
  REMOTE = 'REMOTE',
  ONSITE = 'ONSITE',
  HYBRID = 'HYBRID',
}

// Fields that are searchable and filterable
export const JobPostSearchableFields = [
  'title',
  'category',
  'location',
  'companyName',
];

export const JobPostFilterableFields = [
  'search',
  'title',
  'category',
  'skill',
  'location',
  'employmentType',
  'experienceLevel',
  'salary',
  'currency',
  'status',
  'jobType',
  'remote',
];

// Pagination options interface
export interface IPaginationOptions {
  page?: number;
  size?: number;
  sortBy?: string;
  sortOrder?: string;
}

export type IJobPostPriceFilters = {
  maxSalary?: number;
  minSalary?: number;
};

export const JobPostPriceSearchableFields = ['maxSalary', 'minSalary'];
