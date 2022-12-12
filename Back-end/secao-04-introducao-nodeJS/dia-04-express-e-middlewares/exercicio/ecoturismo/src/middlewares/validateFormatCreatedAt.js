function validateFormatCreatedAt(req, res, next) {
  const { description: { createdAt } } = req.body;

  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  // const formatValid = regex.test(createdAt);

  if (!regex.test(createdAt)) return res.status(400).json({ message: 'O campo createdAt deve ter o formato dd/mm/aaaa' });
  next();
}

module.exports = validateFormatCreatedAt;
