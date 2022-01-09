import "reflect-metadata";
import express from "express";
import "./db";
import { User } from './db/entities/User'
import router from "./routes/routes";
import { getRepository } from "typeorm";
import { initDatabase } from "./db";




const app = express();
app.use(express.json());

app.use(router);





export default app;
