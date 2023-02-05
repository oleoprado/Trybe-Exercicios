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
}