"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const recommendation_controller_1 = require("./recommendation.controller");
const recommendation_validation_1 = require("./recommendation.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(recommendation_validation_1.RecommendationValidation.recommendationValidationSchema), recommendation_controller_1.RecommendationController.createRecommendation);
router.get('/', recommendation_controller_1.RecommendationController.getAllRecommendations);
router.get('/:id', recommendation_controller_1.RecommendationController.getRecommendation);
router.patch('/:id', (0, validateRequest_1.default)(recommendation_validation_1.RecommendationValidation.recommendationValidationSchema), recommendation_controller_1.RecommendationController.updateRecommendation);
router.delete('/:id', recommendation_controller_1.RecommendationController.deleteRecommendation);
exports.RecommendationRoutes = router;
