import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../lib/http";
import { LoginType, UserResponseT, RegisterType } from "../../types/Types";

export const loginThunk = createAsyncThunk('authentification/login', async (payload : LoginType) => {
  const fields = {
    email : payload.email,
    password : payload.password,
  };
  const {data} : {data : UserResponseT} = await http.post("/auth/login", fields);
  return data;
})

export const signUpThunk = createAsyncThunk("authentification/register", async (payload : RegisterType) => {
  const {data} : {data : UserResponseT} = await http.post("/auth/register", payload);
  return data;
})

export const fetchUserThunk = createAsyncThunk("authentification/getUser", async () => {
  const {data} : {data : UserResponseT} = await http.get("/auth/");
  return data;
})