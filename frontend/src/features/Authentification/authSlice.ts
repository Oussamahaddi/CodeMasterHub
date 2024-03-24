import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponseT } from "../../types/Types";
import { fetchUserThunk, loginThunk, signUpThunk } from "./authApi";

interface InitialState {
  auth : boolean
  user : UserResponseT | null
  logged : boolean
}

const initialState : InitialState = {
  auth : false,
  user : null,
  logged : false,
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
      state.logged = false;
    },
    switchForm : (state, actions : PayloadAction) => {
      state.auth = !state.auth
    },
    checkUserRole : (state, actions : PayloadAction<UserResponseT>) => {
      state.logged = true;
      state.user = actions.payload;
    }
  },
  extraReducers : (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      state.logged = true
    }).addCase(loginThunk.rejected, (state, action) => {
      state.logged = false;
      console.log(action.error);
    }).addCase(signUpThunk.fulfilled, (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload))
      state.logged = true
    }).addCase(signUpThunk.rejected, (state, action) => {
      state.logged = false
      console.log(action.error)
    })
    .addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.logged = true
      const user : UserResponseT = JSON.parse(localStorage.getItem("user")!)
      state.user = {...action.payload, token : user.token}
      localStorage.setItem("user", JSON.stringify(state.user));
    })
  }
})

export const { login, register, switchForm, logout, checkUserRole } = authSlice.actions
export default authSlice.reducer;