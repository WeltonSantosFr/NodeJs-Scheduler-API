import { handleError } from "./../errors/AppError";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import AppError from "../errors/AppError";

const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.method === "POST") {
      if (!req.user.isAdm) {
        throw new AppError("Must be an Admin", 403);
      }
    }

    if (req.method === "GET" || req.method === "DELETE") {
      if (!req.user.isAdm) {
        throw new AppError("Must be an Admin", 403);
      }
    }

    if (req.method === "PATCH") {
      const { id } = req.params;

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOneBy({ id });

      if (!req.user.isAdm && req.user.email !== user!.email) {
        throw new AppError("Must be an Admin", 401);
      }
    }

    next();
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default ensureAdmin;
