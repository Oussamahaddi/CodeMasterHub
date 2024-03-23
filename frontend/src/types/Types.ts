

export type RegisterType = {
  firstName : string
  lastName : string
  email : string
  password : string
  address : string
  role : string
  phoneNumber : string
}

export type LoginType = {
  firstName? : string
  lastName? : string
  email : string
  password : string
  address? : string
  role? : string
  phoneNumber? : string
}

export type CoursesT = {
  _id?: string
  title : string
  description : string
  technologie : string
  videos : string[],
  createdAt: string
  user : UserType
}

export type UserType = {
  _id : string
  fullName : string
  address : string
  email : string
  phoneNumber : string
  role : "student" | "instructor" | "admin"
}

export type UserResponseT = {
  user : UserType
  subscription?: SubscriptionType
  token : string
}

export type SubscriptionType = {
  _id? : string
  type : "monthly" | "yearly"
  price : "39" | "390"
  startDate : Date
  endDate : Date
  user : string
}

// export type VideoT = {
//   title : string
//   description : string
//   url : string
// }