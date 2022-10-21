import { Request, Response } from "express";
import AppError, { handleError } from "../../errors/AppError";
import categoryCreateService from "../../services/categories/categoryCreate.service";

const categoryCreateController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newCategory = await categoryCreateService({ name });

    return res.status(201).json(newCategory);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default categoryCreateController;
