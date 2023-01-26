const { generateToken } = require('../utils/jwt');

const validate = async (username, password) => {
  if (!username || !password) throw new Error('Fields required');

  const verifyIsValid = username.length > 4 && typeof username === 'string' && password.length > 4 && typeof password === 'string';
  if(!verifyIsValid) throw new Error('Invalid username or password');
  
  const payload ={ username, admin: false};

  const token = generateToken(payload);
  return token;
}

module.exports = {
  validate,
};