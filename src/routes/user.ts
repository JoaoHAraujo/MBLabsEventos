import { UserController } from "../controllers/user";
import { Router } from "express";

const router = Router();

router.post('/', new UserController().save);

router.get('/', new UserController().getAll);

router.put ('/:id', new UserController().update);



export { router };
