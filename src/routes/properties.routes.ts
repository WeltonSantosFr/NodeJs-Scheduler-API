import { Router } from "express";
import propertiesListController from "../controllers/properties/propertiesList.controller";
import propertyCreateController from "../controllers/properties/propertyCreate.controller";
import ensureAdmin from "../middlewares/ensureAdmin.middleware";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const propertiesRouter = Router();

propertiesRouter.post(
  "/properties",
  ensureAuth,
  ensureAdmin,
  propertyCreateController
);
propertiesRouter.get("/properties", propertiesListController);

export default propertiesRouter;
