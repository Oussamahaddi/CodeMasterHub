import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseType, CustomRequest } from "../types/Types";
import { CourseModel } from "../models/Course";
import { allowedFile } from "../middleware/uploadFiles";


export const getAllCourses = asyncHandler(async (req : Request, res : Response) => {
  const courses = await CourseModel.find();
  if (!courses) throw new Error("No course Found!! ");
  res.status(200).json(courses);
})

export const getCoursesByInstructor = asyncHandler(async (req : CustomRequest, res : Response) => {
  const courses = await CourseModel.find({instructor_id : req.userId})
  if (!courses) throw new Error("No course Found!! ");
  res.status(200).json(courses);
})

export const createCourse = asyncHandler(async (req : CustomRequest, res : Response) => {
  const { title, description, technologie } : CourseType = req.body;
  if (!req.files) {
    throw new Error("No file Uploaded !!!")
  }
  (req.files as Express.Multer.File[]).map((file) => {
    if (!allowedFile(file.filename)) {
      return res.status(400).json({ error: "File type not allowed" });
    }
  })
  const videoPaths = (req.files as Express.Multer.File[]).map((file) => `${req.protocol}://${req.get("host")}/uploads/${file.filename}`)

  const course = new CourseModel({
    title,
    description,
    technologie,
    videos : videoPaths,
    instructor_id : req.userId
  });

  const error = course.validateSync();
  if (error) throw new Error(error.message)
  await course.save()
  res.status(201).json(course);
})