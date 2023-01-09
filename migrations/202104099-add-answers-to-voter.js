"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**Adding an altering commands here**/
    await queryInterface.addColumn("Voters", "responses", {
      type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.INTEGER),
    });
  },

  async down(queryInterface, Sequelize) {
    /** Add reverting commands here.
     * await queryInterface.dropTable('users');
     **/
    await queryInterface.removeColumn("Voters", "responses");
  },
};
