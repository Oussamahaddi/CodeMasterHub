import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { CoursesT } from "../../types/Types";
import { FormInputT } from "../../components/CustomizedModal";
import { toast } from "react-toastify";

export const fetchAllCoursesThunk = createAsyncThunk('courses/fetchCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses");
  return data
})

export const fetchAllCoursesbyInstructor = createAsyncThunk('courses/fetchInstructorCourses', async () => {
  const {data} : {data : CoursesT[]} = await http.get("/courses/instructor");
  return data
})

export const createCourseThunk = createAsyncThunk('courses/createCourse', async (payload : FormInputT, thunkApi) => {
  const {data} : {data : CoursesT[]} = await http.post("/courses/", payload);
  if (data) {
    toast.success('Coruse Created successfully!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  thunkApi.dispatch(fetchAllCoursesbyInstructor())
  return data
})

export const updateCourseThunk = createAsyncThunk('courses/updateCourse', async (payload : FormInputT, thunkApi) => {
  const {data} : {data : CoursesT} = await http.patch(`/courses/${payload._id}`, payload);
  if (data) {
    toast.success('Coruse Updated successfully!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  thunkApi.dispatch(fetchAllCoursesbyInstructor());
  return data
})

export const deleteCourseThunk = createAsyncThunk('courses/deleteCourse', async (courseId : string, thunkApi) => {
  const {data} = await http.delete(`/courses/${courseId}`);
  if (data) {
    toast.success('Coruse deleted successfully!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  thunkApi.dispatch(fetchAllCoursesbyInstructor());
})

export const uploadVideos = createAsyncThunk('courses/uploadVideos', async (payload : FileList) => {
  const formaData = new FormData();
  Array.from(payload).forEach(el => formaData.append("videos", el))
  const {data} : {data : string[]} = await http.post("/upload/", formaData);
  return data
})