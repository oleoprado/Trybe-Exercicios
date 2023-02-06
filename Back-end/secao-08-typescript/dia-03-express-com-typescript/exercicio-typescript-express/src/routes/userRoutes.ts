import { Router } from 'express'
import { UserController } from '../controller/userController';
import { authMiddleware } from '../middleware/auth.middleware';

const routes = Router();
const userController = new UserController();

routes
  .get('/', userController.getAllUsers)
  .post('/', userController.createUser)

routes
  .get('/:id', userController.getUserById)
  .put('/:id', authMiddleware, userController.updateUser)
  .delete('/:id', authMiddleware, userController.deleteUser)

export default routes;