"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelpers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Function to create a JWT token
const createToken = (payload, // Payload for the JWT
secret, // Secret key for signing
expireTime) => {
    const options = {
        expiresIn: expireTime, // Use the compatible type directly
    };
    // Sign the token and return it
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
// Function to verify a JWT token
const verifyToken = (token, secret) => {
    // Verify the token and return the decoded payload
    return jsonwebtoken_1.default.verify(token, secret);
};
// Export the helper functions
exports.jwtHelpers = {
    createToken,
    verifyToken,
};
