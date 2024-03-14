

export type UserT = {
  firstname : string
  lastname : string
  email : string
  password : string
  confirmpassword : string
}

export type LoginInputType = Pick<UserT, "email" | "password">