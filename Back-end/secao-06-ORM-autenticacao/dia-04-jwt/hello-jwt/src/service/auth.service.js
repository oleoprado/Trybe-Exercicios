const { generateToken } = require('../utils/jwt');

const validate = async (username, password) => {
  if (!username || !password) throw new Error('Fields required');

  const verifyIfIsValidFields = username.length > 4 && typeof username === 'string' && password.length > 4 && typeof password === 'string';
  if(!verifyIfIsValidFields) throw new Error('Invalid username or password');

  const isAdmin = username === 'admin' && password ===  's3nh4S3gur4???';

  const payload ={
    username,
    admin: isAdmin
  };

  const token = generateToken(payload);
  return token;
}

module.exports = {
  validate,
};