
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
  technologie : {
    type : String,
    required : [true, "Technologie required"]
  },
  videos : [
    {
      type : String,
    }
  ],
}, {timestamps : true})

export const CourseModel = mongoose.model<CourseType>("courses", CourseSchema)