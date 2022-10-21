import { Request, Response, NextFunction } from "express";

const verifyUpdateFieldsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.hasOwnProperty("id")) {
    return res.status(401).json({ message: "Can not update id field value" });
  }
  if (req.body.hasOwnProperty("isAdm")) {
    return res
      .status(401)
      .json({ message: "Can not update isAdm field value" });
  }
  if (req.body.hasOwnProperty("isActive")) {
    return res
      .status(401)
      .json({ message: "Can not update isActive field value" });
  }
  next();
};

export default verifyUpdateFieldsMiddleware;
