import { Request, Response } from 'express';
import statusCode from '../utils/statusCode';
import { UserService } from '../service/userService';

export class UserController {
  constructor(private userService = new UserService()) {}

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.status(statusCode.OK).json(users);
  }

  public getUserById = async (req: Request, res: Response) => {
    const user = await this.userService.getUserById(req.params.id);
    res.status(statusCode.OK).json(user);
  }
}