const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [{model: Address, as: 'addresses', attributes: { exclude: ['number']}}], // exclui a coluna number do resultado
    // include: [{model: Address, as: 'addresses'}],
  });
  return employee;
}

module.exports = {
  getAll,
  getById,
};