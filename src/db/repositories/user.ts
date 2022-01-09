import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository {
  private userRepository: Repository<User> = getRepository(User);

  async check(opt: Object): Promise<User> {
    const existentUser = await this.userRepository.findOne(opt);
    return existentUser;
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}


export default new UserRepository();