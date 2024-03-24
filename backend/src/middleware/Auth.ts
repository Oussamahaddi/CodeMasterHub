
import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest, DecodedToken } from "../types/Types";
import asyncHandler from "express-async-handler";

export const auth = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) throw new Error("Not Authenticated!!, Make sure to login");
    const newToken = token!.split(" ")[1];
    if (newToken) {
      const decoded = jwt.verify(newToken, process.env.JWT_SECRET!) as DecodedToken;
      req.userId = decoded.userId;
      return next();
    }
    res.status(403).send("Not authorized, no token found");
})