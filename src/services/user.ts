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
  // CHECKS IF ID OF USER EXISTS
  public async userExists(user: User) {
    try {
      const opt = {
        where: [{ id: user.id }],
      };
      const currentUser = await userRepository.findOne(opt);
      if (!currentUser) {
        throw new Error("ID de usuário inexistente!");
      }
      return currentUser;
    } catch ({ message }) {
      throw new Error(`ERRO! -> ${message}`);
    }
  }

  // FIND ALL USERS (no profile_type filter)
  public async findAll() {
    try {
      const allUsers = await userRepository.findAll();
      return {
        message: `Foram encontrados um total de ${allUsers.length} usuário(s) totais.`,
        data: allUsers,
      };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // CREATE NEW USER
  public async createUser(user: User) {
    try {
      await this.checkUser(user);
      const createdUser = await userRepository.save(user);
      return { message: "Usuário cadastrado com sucesso", data: createdUser };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // UPDATE USER
  public async updateUser(user: User) {
    try {
      const currentUser = await this.userExists(user);
      if (
        user.document != currentUser.document ||
        user.email != currentUser.email
      ) {
        await this.checkUser(user);
      }

      currentUser.name = user.name ? user.name : currentUser.name;
      currentUser.age = user.age ? user.age : currentUser.age;
      currentUser.email = user.email ? user.email : currentUser.email;
      currentUser.document = user.document
        ? user.document
        : currentUser.document;
      currentUser.password = user.password
        ? user.password
        : currentUser.password;

      const updatedUser = await userRepository.save(currentUser);

      return { message: "Usuário atualizado com sucesso!", data: updatedUser };
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // DELETE USER
  public async deleteUser(user: User) {
    try {
      const currentUser = await this.userExists(user);
      await userRepository.delete(user);
      return { message: "Usuário apagado com sucesso!", data: currentUser };
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export default new UserService();
