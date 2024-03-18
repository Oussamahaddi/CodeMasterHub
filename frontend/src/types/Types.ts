

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

export type PlaylistT = {
  id : string
  url : string
  title : string
  description : string
  date : string
  technologie : string
  img : string
  videos : VideoT[],
}

export type VideoT = {
  title : string
  description : string
  url : string
}