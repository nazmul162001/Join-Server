"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateProfileService = void 0;
const prisma_1 = __importDefault(require("../../../../shared/prisma"));
const createCandidateProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { candidateId, profileCompletion } = data, fields = __rest(data, ["candidateId", "profileCompletion"]);
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
        const value = fields[field];
        if (Array.isArray(value)) {
            return value.length > 0; // Check non-empty arrays
        }
        return value !== null && value !== undefined && value !== ''; // Check non-empty strings and values
    }).length;
    // Calculate profile completion percentage
    const calculatedProfileCompletion = Math.floor((filledFields / totalFields.length) * 100);
    // Use the provided profileCompletion if given, else use the calculated value
    const finalProfileCompletion = profileCompletion !== null && profileCompletion !== void 0 ? profileCompletion : calculatedProfileCompletion;
    // Create the candidate profile
    const result = yield prisma_1.default.candidateProfile.create({
        // @ts-ignore
        data: Object.assign(Object.assign({}, fields), { profileCompletion: finalProfileCompletion, candidate: candidateId
                ? {
                    connect: { id: candidateId }, // Connect the related User by id
                }
                : undefined }),
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
});
const getAllCandidateProfiles = () => __awaiter(void 0, void 0, void 0, function* () {
    const profiles = yield prisma_1.default.candidateProfile.findMany({
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
});
const getSingleCandidateProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield prisma_1.default.candidateProfile.findUnique({
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
});
const updateCandidateProfile = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProfile = yield prisma_1.default.candidateProfile.update({
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
});
const deleteCandidateProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProfile = yield prisma_1.default.candidateProfile.delete({
        where: { id },
    });
    return deletedProfile;
});
exports.CandidateProfileService = {
    createCandidateProfile,
    getAllCandidateProfiles,
    getSingleCandidateProfile,
    updateCandidateProfile,
    deleteCandidateProfile,
};
