import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

export type UserModelTypes = {
  id?: string
  fullName : string
  email : string
  password : string
  address : string
  phoneNumber : string
  role : string
}

export type Admin = UserModelTypes & {
  
}

export type InstructorType = UserModelTypes & {
  speciality : string
}

export interface StudentType extends UserModelTypes {
  
}

export type CourseType = {
  title : string
  description : string
  videos : string[]
  technologie : string
}

export type LoginType = Pick<UserModelTypes, "email" | "password">

export type RegisterType = Omit<UserModelTypes,"fullName" | "id"> & {
  firstName : string
  lastName : string
}

export interface CustomRequest extends Request {
  userId? : string
}
export interface DecodedToken extends JwtPayload {
  userId: string
};