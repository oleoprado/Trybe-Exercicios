import connection from "../db/connection";
import { UserModel } from '../model/userModel';
import { IUser } from '../interface/IUser';

export class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAllUsers(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getUserById(id: string) {
    const user = await this.model.getById(id);
    return user;
  }

  public async createUser(user: IUser) {
    const { email } = user;

    const userExist = await this.model.verifyIfUserExists(email);
    if (userExist) return { message: "User already exists" };

    const newUser = await this.model.create(user);
    return newUser;
  }

  public async updateUser(id: string, user: IUser) {
    const updatedUser = await this.model.update(id, user);
    return updatedUser;
  }

  public async deleteUser(id: string) {
    this.model.delete(id);
  }
}