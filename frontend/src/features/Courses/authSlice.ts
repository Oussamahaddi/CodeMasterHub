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
    switchForm : (state, actions : PayloadAction) => {
      state.auth = !state.auth
    }
  }
})

export const { switchForm } = authSlice.actions
export default authSlice.reducer;