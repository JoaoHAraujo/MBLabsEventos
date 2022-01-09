import { UserController } from "../controllers/user";
import { Router } from "express";

const router = Router();

router.post("/", new UserController().save);



export { router };
