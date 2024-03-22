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

export const updateCourse = asyncHandler(async (req : Request, res : Response) => {
  const {id} = req.params
  const {title, description, technologie, videos} : Omit<CourseType, "user" | "_id"> = req.body
  const data = {
    title, description, technologie, videos
  }
  const updatedCourse  : Omit<CourseType, "user" | "_id"> | null = await CourseModel.findByIdAndUpdate(id, data, {runValidators : true, new : true});
  if (!updatedCourse) throw new Error("Course Not Found!!");
  res.status(201).json(updatedCourse);
})

export const deleteCourse = asyncHandler(async (req : Request, res : Response) => {
  const {id} = req.params
  const deleteCourse  : CourseType| null = await CourseModel.findByIdAndDelete(id);
  if (!deleteCourse) throw new Error("Course Not Found!!");
  res.status(201).json(deleteCourse);
})