"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
// user routes
router.get('/', service_controller_1.InternetServiceController.getAllService);
router.get('/:id', service_controller_1.InternetServiceController.getSingleService);
router.post('/create-service', service_controller_1.InternetServiceController.createService);
router.patch('/:id', service_controller_1.InternetServiceController.updateService);
router.delete('/:id', service_controller_1.InternetServiceController.deleteService);
exports.ServiceRoute = router;
