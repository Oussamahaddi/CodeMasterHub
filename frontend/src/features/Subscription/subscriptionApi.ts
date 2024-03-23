import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { SubscriptionType } from "../../types/Types";

export const createSubsriptionThunk = createAsyncThunk("subsription/createSubsription", async (payload : {type : string}) => {
  const {data} : {data : SubscriptionType} = await http.post("/subscribe", payload);
  return data;
})