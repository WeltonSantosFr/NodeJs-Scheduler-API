import { Request, Response } from "express";
import AppError, { handleError } from "../../errors/AppError";
import schedulesCreateService from "../../services/schedules/schedulesCreate.service";

const schedulesCreateController = async (req: Request, res: Response) => {
  try {
    const { date, hour, propertyId } = req.body;

    const userId = req.user.id;

    const schedule = await schedulesCreateService({
      date,
      hour,
      propertyId,
      userId,
    });

    return res.status(201).json({ message: "Visit Created" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default schedulesCreateController;
