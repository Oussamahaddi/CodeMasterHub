import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponseT } from "../../types/Types";
import { loginThunk } from "./authApi";
import { useNavigate } from "react-router-dom";

interface InitialState {
  auth : boolean
  user : UserResponseT | null
}

const initialState : InitialState = {
  auth : false,
  user : null
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
    switchForm : (state, actions : PayloadAction) => {
      state.auth = !state.auth
    },
  },
  extraReducers : (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
    }).addCase(loginThunk.rejected, (state, action) => {
      console.log(action.error);
    })
  }
})

export const { login, register, switchForm } = authSlice.actions
export default authSlice.reducer;