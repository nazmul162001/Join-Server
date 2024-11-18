import { NextFunction, Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get authorization token
      const authHeader = req.headers.authorization;
      console.log(authHeader, 'authHeaderrrrrrrr');

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      // Extract the token from the header
      const token = authHeader.split(' ')[1];

      // Verify the token
      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret as Secret,
      );

      console.log(verifiedUser, 'verified userrrrrrrrr');

      req.user = verifiedUser; // Attach role and userId to the request object

      // Role-based authorization
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
