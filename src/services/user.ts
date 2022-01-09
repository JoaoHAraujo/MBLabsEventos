import userRepository from "../db/repositories/user";
import { User } from "../db/entities/User";

export class UserService {

  // CHECKS IF USER ALREADY EXISTS
  public async checkUser(user: User) {
    try {
      const opt = {
        where: [{ email: user.email }, { document: user.document }],
      };
      const existentUser = await userRepository.findOne(opt);
      if (existentUser) {
        throw new Error("Usuário já cadastrado!");
      }
    } catch ({ message }) {
      throw new Error(`ERRO! -> ${message}`);
    }
  }

  // FIND ALL USERS
  public async findAll() {
    try {
      const allUsers = userRepository.findAll();
      return allUsers;
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // CREATE USER
  public async createUser(user: User) {
    try {
      await this.checkUser(user);
      const createdUser = await userRepository.save(user);
      return createdUser;
    } catch ({ message }) {
      throw new Error(message);
    }
  }


  // UPDATE USER
  public async updateOne({id, name, age, email, document, password}) {
    try {
      const opt = { id: id };
      const currentUser = await userRepository.findOne(opt);
      if (!currentUser) {
        throw new Error("Usuário não existe!");
      }

      currentUser.name = name ? name : currentUser.name;
      currentUser.age = age ? age : currentUser.age;
      currentUser.email = email ? email : currentUser.email;
      currentUser.document = document ? document : currentUser.document;
      currentUser.password = password ? password : currentUser.password;

      await this.checkUser(currentUser);

      const updatedUser = await userRepository.save(currentUser);

      return updatedUser;

    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export default new UserService();
