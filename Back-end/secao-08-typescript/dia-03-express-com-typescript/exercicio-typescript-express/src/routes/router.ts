import { Router } from 'express'
import user from './userRoutes';

const routers = Router();

routers.use('/user', user);

export default routers;

