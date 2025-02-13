"use strict";
// import { OAuth2Client } from 'google-auth-library';
// // @ts-ignore
// import httpStatus from 'http-status';
// import jwt from 'jsonwebtoken';
// import config from '../../../config';
// import ApiError from '../../../errors/ApiError';
// import prisma from '../../../shared/prisma';
Object.defineProperty(exports, "__esModule", { value: true });
// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
// );
// const authenticateGoogleUser = async (token: string) => {
//   try {
//     const tokenInfo = await client.getTokenInfo(token);
//     // @ts-ignore
//     const { email, name, sub: externalId } = tokenInfo;
//     if (!email) {
//       throw new ApiError(
//         httpStatus.BAD_REQUEST,
//         'Email not provided by Google',
//       );
//     }
//     // @ts-ignore
//     let user = await prisma.user.findUnique({ where: { externalId } });
//     if (!user) {
//       user = await prisma.user.create({
//         data: {
//           email,
//           name: name || '',
//           // @ts-ignore
//           externalId,
//           password: '',
//         },
//       });
//     }
//     const jwtToken = jwt.sign(
//       { userId: user.id, role: user.role },
//       config.jwt.secret as string,
//       { expiresIn: config.jwt.expires_in },
//     );
//     return jwtToken;
//   } catch (error) {
//     throw new ApiError(
//       httpStatus.UNAUTHORIZED,
//       // @ts-ignore
//       'Error verifying Google token: ' + error.message,
//     );
//   }
// };
// export const GoogleAuthService = {
//   authenticateGoogleUser,
// };
