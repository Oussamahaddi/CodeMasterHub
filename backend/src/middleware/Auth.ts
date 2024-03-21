
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest, DecodedToken } from "../types/Types";

export const auth = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const newToken = token!.split(" ")[1];
    if (newToken) {
      const decoded = jwt.verify(newToken, process.env.JWT_SECRET!) as DecodedToken;
      req.userId = decoded.userId;
    }
    return next();
  } catch (err) {
    res.status(403);
    throw new Error("Not authorized, no token found");
  }
};