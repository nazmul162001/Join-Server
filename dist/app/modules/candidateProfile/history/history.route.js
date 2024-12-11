"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const history_controller_1 = require("./history.controller");
const history_validation_1 = require("./history.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(history_validation_1.HistoryValidation.historyValidationSchema), history_controller_1.HistoryController.createHistory);
router.get('/', history_controller_1.HistoryController.getAllHistories);
router.get('/:id', history_controller_1.HistoryController.getHistory);
router.patch('/:id', (0, validateRequest_1.default)(history_validation_1.HistoryValidation.historyValidationSchema), history_controller_1.HistoryController.updateHistory);
router.delete('/:id', history_controller_1.HistoryController.deleteHistory);
exports.HistoryRoutes = router;
