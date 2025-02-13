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
exports.TaskService = void 0;
const prisma_1 = __importDefault(require("../../../../shared/prisma"));
const createTask = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { candidateId } = data, taskData = __rest(data, ["candidateId"]);
    // Check if the candidate exists
    const candidateExists = yield prisma_1.default.candidateProfile.findUnique({
        where: { id: candidateId },
    });
    if (!candidateExists) {
        throw new Error('Candidate ID does not exist');
    }
    // Create the task
    const task = yield prisma_1.default.sendTask.create({
        data: Object.assign(Object.assign({}, taskData), { candidate: {
                connect: { id: candidateId }, // Use connect to link the candidate
            } }),
        include: {
            candidate: true, // Include related candidate
        },
    });
    return task;
});
const getTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.sendTask.findUnique({
        where: { id },
        include: {
            candidate: true,
        },
    });
    return task;
});
const updateTask = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.sendTask.update({
        where: { id },
        data,
        include: {
            candidate: true,
        },
    });
    return task;
});
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield prisma_1.default.sendTask.delete({
        where: { id },
    });
    return task;
});
const getAllTasks = () => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield prisma_1.default.sendTask.findMany({
        include: {
            candidate: true,
        },
    });
    return tasks;
});
exports.TaskService = {
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllTasks,
};
