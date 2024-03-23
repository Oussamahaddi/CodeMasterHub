import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { LoginType, RegisterType, SubscriptionType, UserModelTypes } from "../types/Types";
import { UserModel } from "../models/User";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcrypt";
import { SubscriptionModel } from "../models/Subscription";

export const login = asyncHandler(async (req : Request, res : Response) => {
  const {email, password} : LoginType = req.body
  const user = await UserModel.findOne({email : email});
  if (!user) throw new Error("User Not Found!!");
  const comparePwd = await bcrypt.compare(password, user.password);
  if (!comparePwd) throw new Error("Password incorrect!!");
  const subscription : SubscriptionType | null = await SubscriptionModel.findOne({user: user._id});
  const {password : pwd, ...useWithoutPassword} = user.toObject();
  const token = generateToken(user._id!, user.role);
  res.status(201).json({user : useWithoutPassword, subscription, token});
})

export const register = asyncHandler(async (req : Request, res : Response) => {
  const {email, password, address, firstName, lastName, phoneNumber, role } : RegisterType = req.body
  const data : UserModelTypes = {
    email,
    password,
    address,
    fullName : `${firstName} ${lastName}`,
    phoneNumber,
    role
  }
  const user = new UserModel(data);
  const error = user.validateSync();
  if (error) throw new Error(error.message);
  const save = await user.save();
  const {password : pwd, ...userWithoutPassword} = save.toObject();
  const token = generateToken(user._id, role)
  res.status(201).json({user : userWithoutPassword, token});
})