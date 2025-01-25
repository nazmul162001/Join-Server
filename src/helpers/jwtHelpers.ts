import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

// Function to create a JWT token
const createToken = (
  payload: Record<string, unknown>, // Payload for the JWT
  secret: Secret, // Secret key for signing
  expireTime: SignOptions['expiresIn'], // Matches the exact type of SignOptions['expiresIn']
): string => {
  const options: SignOptions = {
    expiresIn: expireTime, // Use the compatible type directly
  };

  // Sign the token and return it
  return jwt.sign(payload, secret, options);
};

// Function to verify a JWT token
const verifyToken = (token: string, secret: Secret): JwtPayload => {
  // Verify the token and return the decoded payload
  return jwt.verify(token, secret) as JwtPayload;
};

// Export the helper functions
export const jwtHelpers = {
  createToken,
  verifyToken,
};
