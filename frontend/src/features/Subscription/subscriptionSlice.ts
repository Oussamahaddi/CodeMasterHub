import { createSlice } from "@reduxjs/toolkit"
import { UserResponseT } from "../../types/Types";
import { createSubsriptionThunk } from "./subscriptionApi";

interface InitialState {
}

const initialState : InitialState = {
}

const SubsriptionSlice = createSlice({
  name : 'subscription',
  initialState,
  reducers : {
  },
  extraReducers : (builder) => {
    builder.addCase(createSubsriptionThunk.fulfilled, (state, action) => {
      const getUser : UserResponseT = JSON.parse(localStorage.getItem("user")!)
      const user : UserResponseT = {...getUser, subscription : action.payload}
      localStorage.setItem("user", JSON.stringify(user));
    })
    .addCase(createSubsriptionThunk.rejected, (state, action) => {
      console.log(action.error)
    })
  }
})

// export const {} = SubsriptionSlice.actions;
export default SubsriptionSlice.reducer;
