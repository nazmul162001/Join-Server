export type IJobPost = {
  id: string;
  title: string;
  responsibilities: string;
  category: string;
  skill: string; // JSON string representing an array of skills
  duration: string;
  perks?: string; // Optional JSON string for an array of perks
  coverLetter?: string;
  availability: string;
  assessment?: string; // Optional JSON string for an array of assessments
  vacancy: number;
  location: string;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  salary?: number;
  salaryType?: SalaryType;
  currency?: CurrencyType;
  status: JobStatus;
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
  remote?: boolean;
};

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
}

export enum SalaryType {
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL',
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
