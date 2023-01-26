const { decodeToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if(!authorization) return res.status(401).json({ error: { message: 'Token not found' }});

  const user = decodeToken(authorization);

  if (user.message) return res.status(401).json({ error: { message: user.message }});
  
  req.user = user;

  next();
}

module.exports = authMiddleware;