import { handleError } from "./../../errors/AppError";
import { Request, Response } from "express";
import AppError from "../../errors/AppError";
import schedulesListService from "../../services/schedules/schedulesList.service";

const schedulesListController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const schedules = await schedulesListService(id);

    return res.status(200).json({ schedules: schedules });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default schedulesListController;
