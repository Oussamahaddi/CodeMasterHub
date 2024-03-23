import { Response } from "express";
import asyncHandler from "express-async-handler";
import { CustomRequest, SubscriptionType } from "../types/Types";
import { SubscriptionModel } from "../models/Subscription";

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const startDate = `${year}-${month}-${day}`;

function calculateEndDate(startDate : string, type : "monthly" | "yearly") {
  const startDateObj = new Date(startDate);
  let endDateObj;

  if (type === 'monthly') {
    endDateObj = new Date(startDateObj);
    endDateObj.setMonth(endDateObj.getMonth() + 1);
  } else if (type === 'yearly') {
    endDateObj = new Date(startDateObj);
    endDateObj.setFullYear(endDateObj.getFullYear() + 1);
  } else {
    throw new Error('Invalid subscription type');
  }

  const year = endDateObj.getFullYear();
  const month = String(endDateObj.getMonth() + 1).padStart(2, '0');
  const day = String(endDateObj.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export const createSubscribe = asyncHandler(async (req : CustomRequest, res: Response) => {

  const {type } : SubscriptionType = req.body
  const checkSubscription : SubscriptionType | null = await SubscriptionModel.findOne({user : req.userId});
  
  if (checkSubscription && checkSubscription.type === type) {
    const endDate = new Date(checkSubscription.endDate);
    if (endDate && currentDate < endDate) {
      throw new Error(`You're ${type.toUpperCase()} Subscription not Finish yet!! you can chose the other type of subscription and thank you !!`)
    }
  }

  const subscription = new SubscriptionModel({
    type : type,
    user : req.userId, 
    startDate : startDate,
    endDate : calculateEndDate(startDate, type),
    price : type === "monthly" ? "39" : "390",
  })

  const error = subscription.validateSync();
  if (error) throw new Error(error.message);
  await subscription.save();
  res.status(201).json(subscription);
})