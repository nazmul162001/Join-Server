import { User } from '@prisma/client';
import { Request, Response } from 'express';
// @ts-ignore
import httpStatus from 'http-status';
import { JwtPayload } from 'jsonwebtoken';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

// get all users
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users retrieved successfully',
    data: users,
  });
});

// get single user
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.getSingleUser(id);

  if (!user) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User Not Found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: user,
  });
});

// update single user
const updateSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  const updateUser = await UserService.updateSingleUser(id, body);
  const user = await UserService.getSingleUser(id);

  if (!updateUser) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User not found',
    });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Updated successfully',
    data: user,
  });
});

// delete single user
const deleteSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserService.getSingleUser(id);
  if (!user) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User Does Not Exist',
      data: user,
    });
  }
  await UserService.deleteSingleUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Delete successfully',
    data: user,
  });
});

// get user profile
const getUserProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getUserProfile(
    (req.user as JwtPayload).userId,
  );

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  });
});

const getLoggedInUser = catchAsync(async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Token is required',
    });
  }

  let decodedToken;
  try {
    // Use the custom JWT helper to verify the token
    decodedToken = jwtHelpers.verifyToken(
      token,
      process.env.JWT_SECRET as string,
    );
  } catch (error) {
    return sendResponse(res, {
      statusCode: httpStatus.UNAUTHORIZED,
      success: false,
      message: 'Invalid or expired token',
    });
  }

  const userId = decodedToken.userId;
  if (!userId) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid token payload, userId missing',
    });
  }

  // Fetch user data from the database
  const user = await UserService.getSingleUser(userId);
  if (!user) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'User not found',
    });
  }

  // Return user data
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Logged-in user data retrieved successfully',
    data: user,
  });
});

export const UserController = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  getUserProfile,
  getLoggedInUser,
};
