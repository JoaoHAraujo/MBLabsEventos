import { User } from "../entities/User";
import { getRepository } from "typeorm";

export class UserRepository {
  private userRepository = getRepository(User);

  async checkUser(user: User): Promise<User> {
    const existentUser = await this.userRepository.findOne({
      where: [{ email: user.name }, { cpfcnpj: user.cpfcnpj }],
    });
    return existentUser;
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
