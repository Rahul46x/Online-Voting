"use strict";

/** @type {import('sequelize-cli').Migration} **/
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
      await a queryInterface.createTable('users', { id: Sequelize.INTEGER });
     **/
    await queryInterface.addColumn("Elections", "ended", {
      type: Sequelize.DataTypes.BOOLEAN,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add an reverting commands here.
     *
     * Example:
     * await a queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Elections", "ended");
  },
};
