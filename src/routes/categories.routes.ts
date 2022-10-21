import { Router } from "express";
import categoriesListController from "../controllers/categories/categoriesList.controlle";
import categoriesPropertiesListController from "../controllers/categories/categoriesPropertiesList.controller";
import categoryCreateController from "../controllers/categories/categoryCreate.controller";
import ensureAdmin from "../middlewares/ensureAdmin.middleware";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const categoriesRouter = Router();

categoriesRouter.post(
  "/categories",
  ensureAuth,
  ensureAdmin,
  categoryCreateController
);
categoriesRouter.get("/categories", categoriesListController);
categoriesRouter.get(
  "/categories/:id/properties",
  categoriesPropertiesListController
);

export default categoriesRouter;
