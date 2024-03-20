import { Router } from "express";
import { getAllCourses} from "../controllers/Courses";

const courseRouter = Router();

courseRouter.get('/', getAllCourses);

export default courseRouter;