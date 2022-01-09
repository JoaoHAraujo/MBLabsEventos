import { User } from "db/entities/User";
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
      const { id } = req.params;
      const { name, age, email, document, password } = req.body;

      const result = await UserService.updateOne({
        id,
        name,
        age,
        email,
        document,
        password,
      });
      return res.json(result);
    } catch ({ message }) {
      return res.status(400).json(message);
    }
  }
}
