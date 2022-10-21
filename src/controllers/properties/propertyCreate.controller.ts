import AppError, { handleError } from "./../../errors/AppError";
import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import propertyCreateService from "../../services/properties/propertyCreate.service";

const propertyCreateController = async (req: Request, res: Response) => {
  try {
    const { value, size, categoryId, address } = req.body;

    const newProperty = await propertyCreateService({
      value,
      size,
      categoryId,
      address,
    });

    return res.status(201).json(newProperty);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default propertyCreateController;
