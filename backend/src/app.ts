import express, {Express} from "express";
import dotenv from 'dotenv';
import { errorHandler, notFound } from "./middleware/ErrorHanlder";
import router from "./router";
import cors from 'cors';
import { connectionToDatabase } from "./config/mongoose-connection";
import path from "path";

dotenv.config();

const app : Express = express();

connectionToDatabase();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use(router);

app.use(notFound);
app.use(errorHandler);


export default app;