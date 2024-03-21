import { NextFunction, Response } from "express";
import { CustomRequest, DecodedToken } from "../types/Types";
import jwt from "jsonwebtoken";

export const VerifyRole = (allowedRoles : "student" | "instructor" | "admin") => {
  return (req : CustomRequest, res : Response, next : NextFunction) => {
    if (!req?.userId) return res.sendStatus(401);
    const token = req.headers.authorization;
    const newToken = token!.split(" ")[1];
    const decoded = jwt.verify(newToken, process.env.JWT_SECRET!) as DecodedToken;
    if (decoded.role !== allowedRoles) {
      res.status(401)
      throw new Error("Not Allowed");
    }
    next();
  }
}