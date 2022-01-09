import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository {
  private userRepository: Repository<User> = getRepository(User);

  async findOne(opt: Object): Promise<User> {
    const existentUser = await this.userRepository.findOne(opt);
    return existentUser;
  }

  async findAll() {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

}

export default new UserRepository();
