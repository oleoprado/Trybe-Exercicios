function validateDifficulty(req, res, next) {
  const { description: { difficulty } } = req.body;

  const difficulties = ['Fácil', 'Médio', 'Difícil'];

  if (!difficulties.some(el => el === difficulty)) return res.status(400).json({ message: "O campo difficulty deve ser exatamente assim: \'Fácil\', \'Médio\' ou \'Difícil\'"});
  next();
}

module.exports = validateDifficulty;