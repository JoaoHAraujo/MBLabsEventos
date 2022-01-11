import { FindOneOptions, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UserRepository {
  private userRepository: Repository<User> = getRepository(User);

  async findOne(opt: FindOneOptions<User>): Promise<User> {
    const existentUser = await this.userRepository.findOne(opt);
    return existentUser;
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  async save(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async delete(user: User): Promise<void> {
    await this.userRepository.softDelete(user);
  }
}

export default new UserRepository();
