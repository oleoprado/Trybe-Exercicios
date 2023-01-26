const authService = require('../service/auth.service');

const auth = async (req, res) => {
  const { username, password } = req.body;

  const token = await authService.validate(username, password);

  return res.status(200).json({ token });
}

module.exports = {
  auth,
};