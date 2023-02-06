import { Request, Response, NextFunction } from 'express';
import { InvalidCredentialsError } from 'restify-errors';
import { decodeToken } from '../utils/jwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found'});

  const decoded = decodeToken(authorization);
  if (decoded instanceof InvalidCredentialsError) {
    return res.status(401).json({ message: 'invalid token'});
  }
    
  next();
}

// export function authMiddleware (req: Request, res: Response, next: NextFunction) {
//   const { authorization } = req.headers;
//   if (!authorization) return res.status(401).json({ message: 'Token not found'});

//   try {
//     const user = jwt.verify(authorization, process.env.JWT_SECRET ?? '');
//     console.log('user auth=====>', user);
//     req.user = user;
//     next();
//   } catch(error) {
    
//   }

// }