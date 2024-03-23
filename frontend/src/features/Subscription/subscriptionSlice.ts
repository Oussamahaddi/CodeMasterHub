import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SubscriptionType } from "../../types/Types";
import { createSubsriptionThunk } from "./subscriptionApi";
import { toast } from "react-toastify";

interface InitialState {
  subsription : SubscriptionType | null
}

const initialState : InitialState = {
  subsription : null
}

const SubsriptionSlice = createSlice({
  name : 'subscription',
  initialState,
  reducers : {
    setSubsription : (state, action : PayloadAction<SubscriptionType>) => {
      state.subsription = action.payload
    }
  },
  extraReducers : (builder) => {
    builder.addCase(createSubsriptionThunk.fulfilled, (state, action) => {
      state.subsription = action.payload;
      console.log(action.payload)
      localStorage.setItem("subscription", JSON.stringify(action.payload));
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
    })
    .addCase(createSubsriptionThunk.rejected, (state, action) => {
      console.log(action.error)
    })
  }
})

export const {setSubsription} = SubsriptionSlice.actions;
export default SubsriptionSlice.reducer;
