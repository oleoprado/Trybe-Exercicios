import 'dotenv/config';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IJwtPayload } from '../interface/IJwtPayload'
import { InvalidCredentialsError } from 'restify-errors';

const SECRET = process.env.JWT_SECRET;

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '3d'
}

export const generateToken = (payload: IJwtPayload) => {
  if (!SECRET) {
    throw new Error('JWT secret is not defined');
  }

  try {
    return jwt.sign(payload, SECRET, jwtConfig);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Failed to generate token');
    }
  }
};

export const decodeToken = (token: string) => {
  if (!token) throw new Error('Undefined token');
  if (!SECRET) throw new Error('JWT secret is not defined');

  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    if (error instanceof Error) {
      return new InvalidCredentialsError(error.message);
    }
  }
};
