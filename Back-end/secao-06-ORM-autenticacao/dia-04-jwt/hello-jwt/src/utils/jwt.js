require('dotenv').config();
const jwt = require('jasonwebtoken');

// criando a secret
const SECRET = process.env.SECRET;

// configurando o jwt
const jwtConfig = {
  algorithm: 'HS256',
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
    console.log(err.message);
    throw new Error('Ivalid assignature')
  }
}

module.exports = {
  generateToken,
  decodeToken,
}

