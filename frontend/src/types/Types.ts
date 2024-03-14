

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