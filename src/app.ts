import "reflect-metadata";
import "express-async-errors";
import express from "express";
import errorHandlingMiddleware from "./middlewares/errorHandling.middleware";
import userRouter from "./routes/user.routes";
import categoriesRouter from "./routes/categories.routes";
import propertiesRouter from "./routes/properties.routes";
import schedulesRouter from "./routes/schedules.routes";

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(categoriesRouter);
app.use(propertiesRouter);
app.use(schedulesRouter);
app.use(errorHandlingMiddleware);

export default app;
