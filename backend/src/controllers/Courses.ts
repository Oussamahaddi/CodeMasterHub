import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseType, CourseWithInstructorT, CustomRequest } from "../types/Types";
import { CourseModel } from "../models/Course";
import { allowedFile } from "../middleware/uploadFiles";


export const getAllCourses = asyncHandler(async (req : CustomRequest, res : Response) => {
  const courses : CourseWithInstructorT[] = await CourseModel.find().populate("user");
  if (!courses) throw new Error("No course Found!! ");
  res.status(200).json(courses);
})

export const getCoursesByInstructor = asyncHandler(async (req : CustomRequest, res : Response) => {
  const courses : CourseType[] = await CourseModel.find({user : req.userId})
  if (!courses) throw new Error("No course Found!! ");
  res.status(200).json(courses);
})

export const createCourse = asyncHandler(async (req : CustomRequest, res : Response) => {
  const { title, description, technologie, videos } : CourseType = req.body;

  const course = new CourseModel({
    title,
    description,
    technologie,
    videos,
    user : req.userId
  });

  const error = course.validateSync();
  if (error) throw new Error(error.message)
  await course.save()
  res.status(201).json(course);
})

export const removeVideoFromCourse = asyncHandler(async (req : Request, res : Response) => {
  const {id} = req.params
  const {url} = req.query;
  const course  : CourseType | null = await CourseModel.findById(id);
  if (!course) throw new Error("Course Not Found!!");
  const videoUlrs = course.videos.filter(videoUrl => videoUrl !== url);
  
})