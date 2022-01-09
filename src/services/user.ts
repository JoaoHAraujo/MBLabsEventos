import userRepository from "../db/repositories/user";
import { User } from "../db/entities/User";

export class UserService {
  public async createUser(user: User) {
    
    try {
      const opt = { where: [{ email: user.email }, { document: user.document }] };
      const existentUser = await userRepository.check(opt);
      if (existentUser) {
        throw new Error("Usuário já cadastrado!");
      }
      const createdUser = await userRepository.create(user);
      return createdUser;
      
    } catch ({message}) {
      throw new Error (message)
    }
  }
}

export default new UserService();
