import { Router } from "express";
import { getUser, login , register} from "../controllers/Users";
import { auth } from "../middleware/Auth";

const authRouter = Router()

authRouter.get('/', auth, getUser)
authRouter.post('/login', login)
authRouter.post('/register', register)

export default authRouter;