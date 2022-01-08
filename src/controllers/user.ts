import { Request, response, Response } from "express";
import { UserService } from "../services/user";

export class UserController {
  private userService = new UserService();

  async save(req: Request, res: Response) {
    const { name, age, email, cpfcnpj, profile_type, password } = req.body;

    try {
        const result = await this.userService.createUser({
          name,
          age,
          email,
          cpfcnpj,
          profile_type,
          password,
        });
        return response.json(result) //verificar e editar dados retornados
        
    } catch (error) {
        return response.status(400).json(error.message)
    }


  }
}
