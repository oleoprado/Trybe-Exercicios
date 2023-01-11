const { carModel } = require('../models');

const insert = async (model, color, licensePlate) => {
  const newCarId = await carModel.insertCar(model, color, licensePlate);

  return newCarId;
};

const findAll = async () => {
  const result = await carModel.findAll();
  return result;
};
module.exports = {
  insert,
  findAll,
};