"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostPriceSearchableFields = exports.JobPostFilterableFields = exports.JobPostSearchableFields = exports.JobType = exports.JobStatus = exports.CurrencyType = exports.SalaryType = exports.ExperienceLevel = exports.EmploymentType = void 0;
// Updated Enums with JobType
var EmploymentType;
(function (EmploymentType) {
    EmploymentType["FULL_TIME"] = "FULL_TIME";
    EmploymentType["PART_TIME"] = "PART_TIME";
    EmploymentType["CONTRACT"] = "CONTRACT";
    EmploymentType["TEMPORARY"] = "TEMPORARY";
    EmploymentType["INTERNSHIP"] = "INTERNSHIP";
    EmploymentType["FREELANCE"] = "FREELANCE";
})(EmploymentType || (exports.EmploymentType = EmploymentType = {}));
var ExperienceLevel;
(function (ExperienceLevel) {
    ExperienceLevel["JUNIOR"] = "JUNIOR";
    ExperienceLevel["MID"] = "MID";
    ExperienceLevel["SENIOR"] = "SENIOR";
    ExperienceLevel["LEAD"] = "LEAD";
    ExperienceLevel["EXECUTIVE"] = "EXECUTIVE";
    ExperienceLevel["DIRECTOR"] = "DIRECTOR";
    ExperienceLevel["HR"] = "HR";
})(ExperienceLevel || (exports.ExperienceLevel = ExperienceLevel = {}));
var SalaryType;
(function (SalaryType) {
    SalaryType["HOURLY"] = "HOURLY";
    SalaryType["DAILY"] = "DAILY";
    SalaryType["WEEKLY"] = "WEEKLY";
    SalaryType["MONTHLY"] = "MONTHLY";
    SalaryType["YEARLY"] = "YEARLY";
})(SalaryType || (exports.SalaryType = SalaryType = {}));
var CurrencyType;
(function (CurrencyType) {
    CurrencyType["USD"] = "USD";
    CurrencyType["BDT"] = "BDT";
    CurrencyType["EUR"] = "EUR";
    CurrencyType["GBP"] = "GBP";
    CurrencyType["AUD"] = "AUD";
})(CurrencyType || (exports.CurrencyType = CurrencyType = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["ACTIVE"] = "ACTIVE";
    JobStatus["INACTIVE"] = "INACTIVE";
    JobStatus["CLOSED"] = "CLOSED";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
var JobType;
(function (JobType) {
    JobType["REMOTE"] = "REMOTE";
    JobType["ONSITE"] = "ONSITE";
    JobType["HYBRID"] = "HYBRID";
})(JobType || (exports.JobType = JobType = {}));
// Fields that are searchable and filterable
exports.JobPostSearchableFields = [
    'title',
    'category',
    'location',
    'companyName',
];
exports.JobPostFilterableFields = [
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
exports.JobPostPriceSearchableFields = ['maxSalary', 'minSalary'];
