import { Router } from "express";
import { login } from "../controllers/Users";

const authRouter = Router()

authRouter.post('/login', login)

export default authRouter;