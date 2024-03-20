import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseType } from "../types/Types";
import multer from "multer";
import path from "path";
import { CourseModel } from "../models/Course";
import { allowedFile } from "../middleware/uploadFiles";


export const getAllCourses = asyncHandler(async (req : Request, res : Response) => {
  const courses = await CourseModel.find();
  if (!courses) throw new Error("No course Found!! ");
  res.status(200).json(courses);
})