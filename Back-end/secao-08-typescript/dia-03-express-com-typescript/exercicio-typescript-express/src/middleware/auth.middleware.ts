import { Request, Response, NextFunction } from 'express';
import { decodeToken } from '../utils/jwt';

type TUserToken = {
  id: string,
  email: string,
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const user = decodeToken(authorization);
  if (!user) return res.status(401).json({ message: 'Expired or invalid token' });
  // req.user = user;
  
  next();
}