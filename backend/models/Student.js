const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roll: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  feesPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Student;
