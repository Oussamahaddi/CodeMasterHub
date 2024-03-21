import { Router } from "express";
import { createCourse, getAllCourses, getCoursesByInstructor} from "../controllers/Courses";

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/instructor', getCoursesByInstructor);
courseRouter.post('/', createCourse)

export default courseRouter;