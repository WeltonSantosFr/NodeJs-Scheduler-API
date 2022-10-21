import { Request, Response } from "express";
import categoriesListService from "../../services/categories/categoriesList.service";

const categoriesListController = async (req: Request, res: Response) => {
  const categories = await categoriesListService();

  return res.status(200).json(categories);
};

export default categoriesListController;
