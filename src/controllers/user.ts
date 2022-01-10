import { Request, Response } from "express";
import UserService from "../services/user";

export class UserController {
  async save(req: Request, res: Response) {
    try {
      const result = await UserService.createUser(req.body);
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await UserService.findAll();
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.user_id;
      const { name, age, email, document, password } = req.body;
      const currentUser = {id, name, age, email, document, password}
      const result = await UserService.updateUser(currentUser);
      return res.json(result);
      
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }

  async softDelete(req: Request, res: Response) {
    try {
      const currentUser = {id: req.params.user_id}
      const result = await UserService.deleteUser(currentUser)
      return res.json(result);
    } catch ({message}) {
      return res.status(400).json(message)
    }
  }
}
