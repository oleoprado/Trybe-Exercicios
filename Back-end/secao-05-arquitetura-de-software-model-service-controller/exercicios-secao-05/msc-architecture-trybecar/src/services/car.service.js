const { carModel } = require('../models');

const insert = async (model, color, licensePlate) => {
  const newCarId = await carModel.insertCar(model, color, licensePlate);

  return newCarId;
};

module.exports = {
  insert,
};