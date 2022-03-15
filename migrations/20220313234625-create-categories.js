'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('Categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false, 
    },
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};