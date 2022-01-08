import "reflect-metadata";
import express from "express";
import "./db";

const app = express();

app.use(express.json());

export default app;
