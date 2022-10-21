import { handleError } from "./../../errors/AppError";
import { IUserUpdate } from "../../interfaces/users";
import { Request, Response } from "express";
import userUpdateService from "../../services/user/userUpdate.service";
import AppError from "../../errors/AppError";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: IUserUpdate = req.body;
    const { id } = req.params;

    const user = await userUpdateService({ name, email, password }, id);

    return res.status(200).json({ message: "User Updated" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default userUpdateController;
