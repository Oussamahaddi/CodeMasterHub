import { Router } from "express";
import authRouter from "./AuthRouter";
import courseRouter from "./CourseRouter";
import { uploadMiddleware, uploadVideos } from "../middleware/uploadFiles";
import { VerifyRole } from "../middleware/VerifyRole";
import { auth } from "../middleware/Auth";

const router = Router()

router.use("/auth", authRouter);
router.use('/courses',  courseRouter);

router.post("/upload", uploadMiddleware, uploadVideos)

export default router;