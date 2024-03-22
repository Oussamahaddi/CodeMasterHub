import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { CoursesT } from "../../types/Types";
import { FormInputT } from "../../components/CustomizedModal";

export const fetchAllCoursesThunk = createAsyncThunk('courses/fetchCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses");
  return data
})

export const fetchAllCoursesbyInstructor = createAsyncThunk('courses/fetchInstructorCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses/instructor");
  return data
})

export const createCourseThunk = createAsyncThunk('courses/createCourse', async (payload : FormInputT) => {
  const {data} : {data : CoursesT[]} = await http.post("/courses/", payload);
  return data
})

export const uploadVideos = createAsyncThunk('courses/uploadVideos', async (payload : FileList) => {
  const formaData = new FormData();
  Array.from(payload).forEach(el => formaData.append("videos", el))
  const {data} : {data : string[]} = await http.post("/upload/", formaData);
  return data
})