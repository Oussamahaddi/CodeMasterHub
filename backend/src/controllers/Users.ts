import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

type User = {
  email : string
  password : string
}

export const login = asyncHandler(async (req : Request, res : Response) => {
  console.log(req.body)
  const {email, password} : User = req.body
  if (!email || !password) {
    throw new Error("email or password missing!!");
  }
  res.status(201).json("You are logged in !");
})

// tana baghi benifice tana baghi villa f jarda canabise tana baghi mohami nfis baghi baghi