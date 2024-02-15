import express, {Express} from "express";
import dotenv from 'dotenv';
import { errorHandler, notFound } from "./middleware/ErrorHanlder";
import router from "./router";
import cors from 'cors';

dotenv.config();

const app : Express = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(cors())
app.use(router);

app.use(notFound);
app.use(errorHandler);


export default app;