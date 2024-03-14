import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  auth : boolean
}

const initialState : InitialState = {
  auth : false
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
    
  }
})

export const { login, register, switchForm } = authSlice.actions
export default authSlice.reducer;