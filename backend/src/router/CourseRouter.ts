import { Router } from "express";
import { createCourse, getAllCourses, getCoursesByInstructor} from "../controllers/Courses";
import { auth } from "../middleware/Auth";
import { VerifyRole } from "../middleware/VerifyRole";

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/instructor', auth, VerifyRole('instructor'), getCoursesByInstructor);
courseRouter.post('/', auth, VerifyRole('instructor'), createCourse)

export default courseRouter;