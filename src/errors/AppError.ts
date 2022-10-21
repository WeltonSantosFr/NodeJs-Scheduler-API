import { Response } from "express";

export default class AppError {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const handleError = (error: AppError, response: Response) => {
  const { statusCode, message } = error;

  return response
    .status(statusCode)
    .json({ status: "error", statusCode, message });
};
