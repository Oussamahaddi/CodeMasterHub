
import Axios, { AxiosError } from "axios"
import { UserResponseT } from "../types/Types";
import { toast } from "react-toastify";

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
http.interceptors.response.use((config) => config, 
  (error) => {
    if (error instanceof AxiosError)
      if (error.response)
        toast.error(error.response.data.message, {
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
)