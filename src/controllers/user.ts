import { Request, Response } from "express";
import UserService from "../services/user";

export class UserController {
  // private userService = UserService;

  async save(req: Request, res: Response) {
    const userService = UserService;
    try {
        const result = await userService.createUser(req.body);
        return res.json(result)
        
    } catch (error) {
      console.log(error)
        return res.status(400).json(error.message)
    }


  }
}
