import { OAuth2Client } from 'google-auth-library';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

const authenticateGoogleUser = async (token: string) => {
  try {
    const tokenInfo = await client.getTokenInfo(token);
    const { email, name, sub: googleId } = tokenInfo;

    if (!email) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        'Email not provided by Google',
      );
    }

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: name || '',
          googleId,
          password: '',
        },
      });
    }

    const jwtToken = jwt.sign(
      { userId: user.id, role: user.role },
      config.jwt.secret as string,
      { expiresIn: config.jwt.expires_in },
    );

    return jwtToken;
  } catch (error) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'Error verifying Google token: ' + error.message,
    );
  }
};

export const GoogleAuthService = {
  authenticateGoogleUser,
};
