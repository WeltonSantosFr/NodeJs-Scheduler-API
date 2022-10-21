import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteController from "../controllers/user/userDelete.controller";
import userListController from "../controllers/user/userList.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";
import ensureAdmin from "../middlewares/ensureAdmin.middleware";
import ensureAuth from "../middlewares/ensureAuth.middleware";
import verifyUpdateFieldsMiddleware from "../middlewares/verifyUpdateFields.middleware";

const userRouter = Router();

userRouter.post("/users", userCreateController);
userRouter.post("/login", userLoginController);
userRouter.get("/users", ensureAuth, ensureAdmin, userListController);
userRouter.patch(
  "/users/:id",
  ensureAuth,
  ensureAdmin,
  verifyUpdateFieldsMiddleware,
  userUpdateController
);
userRouter.delete("/users/:id", ensureAuth, ensureAdmin, userDeleteController);

export default userRouter;
