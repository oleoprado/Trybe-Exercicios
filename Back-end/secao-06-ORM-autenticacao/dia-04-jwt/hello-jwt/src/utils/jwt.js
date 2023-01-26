require('dotenv').config();
const jwt = require('jsonwebtoken');

// criando a secret
const SECRET = process.env.JWT_SECRET;

// configurando o jwt
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '1h',
}

// cria a função p/ gerar o token
const generateToken = (payload) => {
  try {
    return jwt.sign(payload, SECRET, jwtConfig);
  } catch (err) {
    console.log(err.message);
    throw new Error('Failed to generate token');
  }
};

// cria função para descodificar e validar token
const decodeToken = (token) => {
  if (!token) throw new Error('Undefined token');

  try {
    const result = jwt.verify(token, SECRET);
    return result;
  } catch (err) {
    return new Error(err.message)
  }
}

module.exports = {
  generateToken,
  decodeToken,
}

