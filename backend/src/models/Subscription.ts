import mongoose, { Schema } from "mongoose";
import { SubscriptionType } from "../types/Types";


const subscriptionSchem = new Schema<SubscriptionType>({
  type : {
    type : String,
    enum : ["monthly", "yearly"],
    required : [true, "Subscription Type required"]
  },
  price : {
    type : String,
    required : [true, "Price required"],
    select: false,
  },
  startDate : {
    type : Date,
    required : [true, "Start date required"]
  },
  endDate : {
    type : Date
  },
  user : {
    type : Schema.Types.ObjectId,
    ref : "User",
    required : [true, "User Id is required"]
  }
})

export const SubscriptionModel = mongoose.model<SubscriptionType>("subscriptions", subscriptionSchem);
