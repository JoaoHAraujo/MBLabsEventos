import { UserController } from "../controllers/user";
import { Router } from "express";

const router = Router();
const userController = new UserController();

router.post('/', userController.save);

router.get('/', userController.getAll);

router.put ('/:user_id', userController.update);

router.delete ('/:user_id', userController.softDelete)



export { router };
