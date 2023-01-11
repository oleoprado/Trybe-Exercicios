const snakeize = require('snakeize');
const connection = require('./connection');

const insertCar = async (car) => {
  const columns = Object.keys(snakeize(car)).join(', ');

  const placeholders = Object.keys(car)
    .map((_key) => '?')
    .join(', ');

  const [{ id }] = await connection.execute(
    `INSERT INTO cars (${columns}) VALUE (${placeholders})`,
    [...Object.values(car)],
  );

  return id;
};

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM cars',
  );

  return result;
};

module.exports = {
  insertCar,
  findAll,
};