'use strict';

module.exports = (sequelize, DataTypes) => {
  const BookSchema = sequelize.define('Book', 
  {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    pageQuantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    publisher: {
      type: DataTypes.STRING,
    }
  });

  return BookSchema;
}