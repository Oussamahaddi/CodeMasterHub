
import mongoose, { Schema } from "mongoose";
import { CourseType } from "../types/Types";

const CourseSchema : Schema<CourseType> = new Schema<CourseType>({
  title : {
    type : String,
    required : [true , 'Title required'],
  },
  description : {
    type : String,
    required : [true , 'Description required'],
  },
  videos : [
    {
      type : String,
    }
  ],
})

export const CourseModel = mongoose.model<CourseType>("courses", CourseSchema)