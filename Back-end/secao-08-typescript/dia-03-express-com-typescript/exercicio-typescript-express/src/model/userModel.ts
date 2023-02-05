import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async getById(id: string): Promise<IUser> {
    const result = await this.connection.execute('SELECT id, name, email FROM Users WHERE id =?', [id]);
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?,?,?)',
      [name, email, password]
    );
    const [dataInserted] = result; 
    const { insertId } = dataInserted;

    return { id: insertId, ...user };
  }

  public async update(id: string, user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    await this.connection.execute(
      'UPDATE Users SET name =?, email =?, password =? WHERE id =?',
      [name, email, password, id]
    );
    const updatedUser = await this.getById(id);
    return updatedUser;
  }

  public async delete(id: string): Promise<void> {
    await this.connection.execute('DELETE FROM Users WHERE id =?', [id]);
  }

  public async verifyIfUserExists(email: string): Promise<boolean> {
    const result = await this.connection.execute(
      'SELECT * FROM Users WHERE email =?', [email]);
    const [rows] = result;
    const [user] = rows as IUser[];
   
    return !!user;
  }
}