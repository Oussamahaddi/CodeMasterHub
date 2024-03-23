import { Router } from "express";
import authRouter from "./AuthRouter";
import courseRouter from "./CourseRouter";
import SubscriptionRouter from "./SubscriptionRouter";
import { auth } from "../middleware/Auth";
import { uploadMiddleware, uploadVideos } from "../middleware/uploadFiles";

const router = Router()

router.use("/auth", authRouter);
router.use('/courses',  courseRouter);
router.use('/subscribe', auth, SubscriptionRouter);

router.post("/upload", uploadMiddleware, uploadVideos)

export default router;