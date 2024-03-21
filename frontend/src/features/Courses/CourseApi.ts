import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { CoursesT } from "../../types/Types";

export const fetchAllCoursesThunk = createAsyncThunk('courses/fetchCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses");
  return data
})

export const fetchAllCoursesbyInstructor = createAsyncThunk('courses/fetchInstructorCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses/instructor");
  return data
})