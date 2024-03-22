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
    required : [true, "Price required"]
  },
  startDate : {
    type : Date,
    required : [true, "Start date required"]
  },
  endDate : {
    type : Date
  }
})

export const SubscriptionModel = mongoose.model<SubscriptionType>("subscriptions", subscriptionSchem);
