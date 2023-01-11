const { expect } = require('chai');
const sinon = require('sinon');
const { carModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { newCar } = require('./mocks/car.model.mock');

describe('Car Model', function () {
  // after(async function () {
  //   connection.execute.restore();
  // });
  
  it('Cadastrando um novo carro', async function () {
    sinon.stub(connection, 'execute').resolves([{ id: 7 }]);

    const result = await carModel.insertCar(newCar);

    expect(result).to.equal(7);
    connection.execute.restore();
  });
});