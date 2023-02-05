import { Router } from 'express'
import { UserController } from '../controller/userController';

const routes = Router();
const userController = new UserController();

routes
  .get('/', userController.getAllUsers);

routes
  .get('/:id', userController.getUserById);

export default routes;