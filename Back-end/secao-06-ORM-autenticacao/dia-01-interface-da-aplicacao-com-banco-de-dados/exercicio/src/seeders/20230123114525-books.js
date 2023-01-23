'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => await queryInterface.bulkInsert('Books',
  [
    {
      title: 'O Alquimista',
      author: 'Paulo Coelho',
      pageQuantity: 489,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      pageQuantity: 1216,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Harry Potter Chapadão',
      author: 'J.K. Rowling',
      pageQuantity: 320,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

  ], {}),

  down: async (queryInterface, Sequelize) => await queryInterface.bulkDelete('Books', null, {}),
};
