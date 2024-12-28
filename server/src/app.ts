import questionRouter from "./routes/questionsRoutes";
import categoryRouter from "./routes/categoriesRoutes";

import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
//import dotenv from "dotenv";

//dotenv.config();

const port:Number = 80
const app: Express = express();

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/questions", questionRouter)
app.use("/categories", categoryRouter)

console.log(process.env.MONGODB_USERNAME)
console.log(process.env.MONGODB_PASSWORD)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/question_DB?authSource=admin`);