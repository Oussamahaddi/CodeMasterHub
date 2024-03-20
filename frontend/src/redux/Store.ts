import { Tuple, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Authentification/authSlice";
import CoursesSlice from "../features/Courses/CourseSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer : {
    authentification : authSlice,
    courses : CoursesSlice,
  },
  middleware : () => new Tuple(thunk)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;