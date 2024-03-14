import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/Courses/authSlice";

const store = configureStore({
  reducer : {
    authentification : authSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;