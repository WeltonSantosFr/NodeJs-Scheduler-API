import { Request, Response } from "express";
import AppError, { handleError } from "../../errors/AppError";
import categoriesPropertiesListService from "../../services/categories/categoriesPropertiesList.service";

const categoriesPropertiesListController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const categoryProperties = await categoriesPropertiesListService(id);

    return res.status(200).json(categoryProperties);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default categoriesPropertiesListController;
