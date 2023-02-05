import { Router } from 'express'
import { UserController } from '../controller/userController';

const routes = Router();
const userController = new UserController();

routes
  .get('/', userController.getAllUsers)
  .post('/', userController.createUser)

routes
  .get('/:id', userController.getUserById)
  .put('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser)

export default routes;