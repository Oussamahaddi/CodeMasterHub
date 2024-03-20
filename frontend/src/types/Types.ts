

export type UserT = {
  firstname : string
  lastname : string
  email : string
  password : string
  confirmpassword : string
}

export type LoginInputType = {
  firstname? : string
  lastname? : string
  email : string
  password : string
  confirmpassword? : string
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

// export type VideoT = {
//   title : string
//   description : string
//   url : string
// }