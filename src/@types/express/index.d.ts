import { IUserToken } from "../../interfaces/users";
import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: IUserToken;
    }
  }
}
