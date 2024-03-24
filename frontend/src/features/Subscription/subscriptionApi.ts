import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { SubscriptionType } from "../../types/Types";
import { toast } from "react-toastify";
import { fetchUserThunk } from "../Authentification/authApi";

export const createSubsriptionThunk = createAsyncThunk("subsription/createSubsription", async (payload : {type : string}, thunkApi) => {
  const {data} : {data : SubscriptionType} = await http.post("/subscribe", payload);
  if (data) {
    toast.success('Subscription successfully!!', {
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
  thunkApi.dispatch(fetchUserThunk());
  return data;
})