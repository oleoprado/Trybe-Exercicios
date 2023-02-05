import { Pool } from 'mysql2/promise';
import { IUser } from '../interface/IUser';

export class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]>{
    const result = await this.connection.execute('SELECT * FROM Users');    
    const [rows] = result;

    return rows as IUser[];
  }

  public async getById(id: string) {
    const result = await this.connection.execute('SELECT id, name, email FROM Users WHERE id =?', [id]);
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  }
}