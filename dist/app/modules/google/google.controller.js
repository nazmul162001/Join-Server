"use strict";
// import { Request, Response } from 'express';
// import catchAsync from '../../../shared/catchAsync';
// import sendResponse from '../../../shared/sendResponse';
// import { GoogleAuthService } from './google.service';
Object.defineProperty(exports, "__esModule", { value: true });
// // const authenticate = catchAsync(async (req: Request, res: Response) => {
// //   const { token } = req.body;
// //   if (!token) {
// //     return res.status(400).json({
// //       statusCode: 400,
// //       message: 'Google token is required',
// //       success: false,
// //     });
// //   }
// //   const jwtToken = await GoogleAuthService.authenticateGoogleUser(token);
// //   sendResponse(res, {
// //     statusCode: 200,
// //     message: 'User authenticated successfully via Google',
// //     success: true,
// //     token: jwtToken,
// //   });
// // });
// const authenticate = catchAsync(async (req: Request, res: Response) => {
//   const { token } = req.body;
//   if (!token) {
//     return sendResponse(res, {
//       statusCode: 400,
//       message: 'Google token is required',
//       success: false,
//     });
//   }
//   try {
//     const jwtToken = await GoogleAuthService.authenticateGoogleUser(token);
//     sendResponse(res, {
//       statusCode: 200,
//       message: 'User authenticated successfully via Google',
//       success: true,
//       // @ts-ignore
//       token: jwtToken,
//     });
//   } catch (error) {
//     sendResponse(res, {
//       // @ts-ignore
//       statusCode: error.statusCode || 500,
//       // @ts-ignore
//       message: error.message,
//       success: false,
//     });
//   }
// });
// export const GoogleAuthController = {
//   authenticate,
// };
