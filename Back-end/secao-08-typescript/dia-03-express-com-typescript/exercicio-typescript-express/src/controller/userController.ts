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

  public createUser = async (req: Request, res: Response) => {
    const newUser = await this.userService.createUser(req.body);
    res.status(statusCode.OK).json(newUser);
  }

  public updateUser = async (req: Request, res: Response) => {
    const updatedUser = await this.userService.updateUser(req.params.id, req.body);
    res.status(statusCode.OK).json(updatedUser);
  }

  public deleteUser = async (req: Request, res: Response) => {
    await this.userService.deleteUser(req.params.id);
    res.status(statusCode.NO_CONTENT).end();
  }
}