import Express from "express";
import dotenv from 'dotenv'
import router from "./routes/index.js";
import authRouter from "./routes/authRoute.js";
import { connectToDB } from "./connectToDB.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = Express();
dotenv.config();

app.use(cors({ credentials: true, origin: process.env.ORIGIN_URL }))

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(router);
app.use(authRouter);

const port = process.env.PORT
connectToDB()

app.listen(port, console.log(`Server is running on port: ${port}`));