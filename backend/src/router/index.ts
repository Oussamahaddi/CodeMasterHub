import { Router } from "express";
import authRouter from "./AuthRouter";
import courseRouter from "./CourseRouter";
import { uploadMiddleware } from "../middleware/uploadFiles";

const router = Router()

router.use("/auth", authRouter);
router.use('/courses', uploadMiddleware, courseRouter);

export default router;