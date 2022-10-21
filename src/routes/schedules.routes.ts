import { Router } from "express";
import schedulesCreateController from "../controllers/schedules/schedulesCreate.controller";
import schedulesListController from "../controllers/schedules/schedulesList.controller";
import ensureAdmin from "../middlewares/ensureAdmin.middleware";

import ensureAuth from "../middlewares/ensureAuth.middleware";

const schedulesRouter = Router();

schedulesRouter.post("/schedules", ensureAuth, schedulesCreateController);
schedulesRouter.get(
  "/schedules/properties/:id",
  ensureAuth,
  ensureAdmin,
  schedulesListController
);

export default schedulesRouter;
