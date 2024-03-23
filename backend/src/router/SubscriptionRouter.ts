import { Router } from "express";
import { createSubscribe } from "../controllers/Subscriptions";

const SubscriptionRouter = Router();

SubscriptionRouter.post("/", createSubscribe);

export default SubscriptionRouter;