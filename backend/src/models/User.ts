import mongoose, { Schema } from "mongoose";
import { UserModelTypes } from "../types/Types";
import bcrypt from "bcrypt"

const UserSchema = new Schema<UserModelTypes>({
  fullName : {
    type : String,
    required : [true, "FullName is required"],
    max : [20, "Full Name must not be more that 20 character"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true
  },
  phoneNumber : {
    type: String,
    required: [true, "Phone Number is required"],
  },
  role : {
    type : String,
    enum : ["admin", "student", "instructor"],
  },
})

UserSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt);
    return next();
  } catch (err) {
    console.log(err)
  }
});

export const UserModel = mongoose.model<UserModelTypes>("User", UserSchema)