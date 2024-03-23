import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponseT } from "../../types/Types";
import { loginThunk, signUpThunk } from "./authApi";

interface InitialState {
  auth : boolean
  user : UserResponseT | null
  logged : boolean
  checkRole : "student" | "instructor" | "admin"
}

const initialState : InitialState = {
  auth : false,
  user : null,
  logged : false,
  checkRole : "student"
}

const authSlice = createSlice({
  name : 'authentification',
  initialState,
  reducers : {
    register : (state, actions : PayloadAction) => {
      state.auth = true
    },
    login : (state, actions : PayloadAction) => {
      state.auth = false
    },
    logout : (state, actions : PayloadAction) => {
      localStorage.removeItem("user");
      localStorage.removeItem("subscription");
      state.logged = false;
    },
    switchForm : (state, actions : PayloadAction) => {
      state.auth = !state.auth
    },
    checkUserRole : (state, actions : PayloadAction<UserResponseT>) => {
      state.logged = true;
      state.user = actions.payload
      switch (actions.payload.user.role) {
        case "instructor":
          state.checkRole = "instructor"
          break;
        case "student":
          state.checkRole = "student"
          break;
        case "admin":
          state.checkRole = "admin"
          break;
        default:
          state.checkRole = "student"
          break;
      }
    }
  },
  extraReducers : (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      if (action.payload.subscription) {localStorage.setItem("subsription", JSON.stringify(action.payload.subscription))}
      state.logged = true
      switch (action.payload.user.role) {
        case "instructor":
          state.checkRole = "instructor"
          break;
        case "student":
          state.checkRole = "student"
          break;
        case "admin":
          state.checkRole = "admin"
          break;
        default:
          state.checkRole = "student"
          break;
      }
    }).addCase(loginThunk.rejected, (state, action) => {
      state.logged = false;
      console.log(action.error);
    }).addCase(signUpThunk.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      state.logged = true
      switch (action.payload.user.role) {
        case "instructor":
          state.checkRole = "instructor"
          break;
        case "student":
          state.checkRole = "student"
          break;
        case "admin":
          state.checkRole = "admin"
          break;
        default:
          state.checkRole = "student"
          break;
      }
    }).addCase(signUpThunk.rejected, (state, action) => {
      state.logged = false
      console.log(action.error)
    })
  }
})

export const { login, register, switchForm, logout, checkUserRole } = authSlice.actions
export default authSlice.reducer;