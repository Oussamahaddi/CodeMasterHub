import { Router } from "express";
import { createCourse , getAllCourses} from "../controllers/Courses";

const courseRouter = Router();

courseRouter.get('/', getAllCourses);
courseRouter.post('/', createCourse);

export default courseRouter;