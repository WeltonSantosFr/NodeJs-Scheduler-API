import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError, { handleError } from "../errors/AppError";

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError("No Token Infomed", 401);
    }

    token = token!.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        if (error) {
          throw new AppError("Invalid Token", 401);
        }
        req.user = decoded;
        next();
      }
    );
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default ensureAuth;
