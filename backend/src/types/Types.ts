import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"
import { Schema } from "mongoose"

export type UserModelTypes = {
  _id?: string
  fullName : string
  email : string
  password : string
  address : string
  phoneNumber : string
  role : string
}


export type CourseType = {
  _id? : string
  title : string
  description : string
  videos : string[]
  technologie : string
  user : Schema.Types.ObjectId
}

export type CourseWithInstructorT = {
  _id : Schema.Types.ObjectId
  title : string
  description : string
  videos : string[]
  technologie : string
  user : UserModelTypes
}

export type LoginType = Pick<UserModelTypes, "email" | "password">

export type RegisterType = Omit<UserModelTypes,"fullName" | "id"> & {
  firstName : string
  lastName : string
}

export interface CustomRequest extends Request {
  userId? : Schema.Types.ObjectId
}
export interface DecodedToken extends JwtPayload {
  userId: Schema.Types.ObjectId
};

export type SubscriptionType = {
  _id? : string
  type : "monthly" | "yearly"
  price : "39" | "390"
  startDate : Date
  endDate : Date
  user : Schema.Types.ObjectId
}