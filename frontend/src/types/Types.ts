

export type RegisterType = {
  firstname : string
  lastname : string
  email : string
  password : string
  confirmpassword : string
  role : string
  phoneNumber : string
}

export type LoginType = {
  firstname? : string
  lastname? : string
  email : string
  password : string
  confirmpassword? : string
  role? : string
  phoneNumber? : string
}

export type CoursesT = {
  _id?: string
  title : string
  description : string
  technologie : string
  img : string
  videos : string[],
  createdAt: string
}

export type UserType = {
  _id : string
  fullName : string
  address : string
  email : string
  phoneNumber : string
  role : "student" | "instructor"
}

export type UserResponseT = {
  user : UserType
  token : string
}

// export type VideoT = {
//   title : string
//   description : string
//   url : string
// }