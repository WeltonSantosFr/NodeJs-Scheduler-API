import { handleError } from "./../../errors/AppError";
import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import userLoginService from "../../services/user/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userLoginService({ email, password });

    return res.status(200).json({ token: token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userLoginController;
