import 'dotenv/config';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IJwtPayload } from '../interface/IJwtPayload'

const SECRET = process.env.JWT_SECRET;

const jwtConfig: SignOptions = {
  algorithm: 'HS256',
}

export const generateToken = (payload: IJwtPayload) => {
  try {
    return jwt.sign(payload, SECRET, jwtConfig);
  } catch (error) {
    console.log('error no generateToken ', error.message);
    throw new Error('Failed to generate token');
  }
};

export const decodeToken = (token: string) => {
  if (!token) throw new Error('Undefined token');

  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    console.log('erro no decodeToke ', error.message);
    return new Error(error.message);
  }
};
