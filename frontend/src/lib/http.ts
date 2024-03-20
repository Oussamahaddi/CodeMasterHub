
import Axios from "axios"

export const http = Axios.create({
  baseURL: "http://localhost:5000",
  headers : {
    "Content-Type" : "application/json",
    "Accept" : "accplication/json"
  }
})