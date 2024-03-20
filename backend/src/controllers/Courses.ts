import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { CourseType } from "../types/Types";
import multer from "multer";
import path from "path";
import { CourseModel } from "../models/Course";
import { allowedFile } from "../middleware/uploadFiles";

