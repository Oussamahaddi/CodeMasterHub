import { Router } from "express";
import authRouter from "./AuthRouter";
import courseRouter from "./CourseRouter";
import { uploadMiddleware } from "../middleware/uploadFiles";
import { VerifyRole } from "../middleware/VerifyRole";
import { auth } from "../middleware/Auth";

const router = Router()

router.use("/auth", authRouter);
router.use('/courses', auth, VerifyRole('instructor'), uploadMiddleware, courseRouter);

export default router;