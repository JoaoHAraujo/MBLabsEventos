import { UserRepository } from "../db/repositories/user";
import { User } from "../db/entities/User";

export class UserService {
  private userRepo = new UserRepository();

  public async createUser(user: User) {
    try {
      const existentUser = await this.userRepo.checkUser(user);
      if (existentUser) {
        throw new Error("Usuário já cadastrado!");
      }

      const createdUser = await this.userRepo.create(user);
      return createdUser;

    } catch ({ message }) {
      throw new Error(`Erro ao salvar o usuário! ${message}`);
    }
  }
}
