
import Axios from "axios"
import { UserResponseT } from "../types/Types";

export const http = Axios.create({
  baseURL: "http://localhost:5000",
  headers : {
    "Accept" : "accplication/json"
  }
})

http.interceptors.request.use((config) => {
  const user : UserResponseT | null = JSON.parse(localStorage.getItem("user")!);
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config;
})