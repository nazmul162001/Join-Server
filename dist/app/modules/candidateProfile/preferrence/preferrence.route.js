"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferenceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const preferrence_controller_1 = require("./preferrence.controller");
const preferrence_validation_1 = require("./preferrence.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(preferrence_validation_1.PreferenceValidation.preferenceValidationSchema), preferrence_controller_1.PreferenceController.createPreference);
router.get('/', preferrence_controller_1.PreferenceController.getAllPreferences);
router.get('/:id', preferrence_controller_1.PreferenceController.getPreference);
router.patch('/:id', (0, validateRequest_1.default)(preferrence_validation_1.PreferenceValidation.preferenceValidationSchema), preferrence_controller_1.PreferenceController.updatePreference);
router.delete('/:id', preferrence_controller_1.PreferenceController.deletePreference);
exports.PreferenceRoutes = router;
