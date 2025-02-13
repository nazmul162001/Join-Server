"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const event_controller_1 = require("./event.controller");
const event_validation_1 = require("./event.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(event_validation_1.CalendarEventValidation.calendarEventValidationSchema), event_controller_1.CalendarEventController.createEvent);
router.get('/', event_controller_1.CalendarEventController.getAllEvents);
router.get('/:id', event_controller_1.CalendarEventController.getEvent);
router.patch('/:id', (0, validateRequest_1.default)(event_validation_1.CalendarEventValidation.calendarEventValidationSchema), event_controller_1.CalendarEventController.updateEvent);
router.delete('/:id', event_controller_1.CalendarEventController.deleteEvent);
exports.CalendarEventRoutes = router;
