function validateRating(req, res, next) {
  const { description: { rating } } = req.body;

  const validRating = rating >= 1 && rating <= 5;
  
  if(!validRating) return res.status(400).json({ message: 'O campo rating deve ser um numero inteiro entre 1 e 5' });
  next();
}

module.exports = validateRating;