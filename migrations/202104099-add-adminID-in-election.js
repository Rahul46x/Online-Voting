"use strict";

/** @type {import('sequelize-cli').Migration} **/
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Adding an altering commands here.
     * Example are:
     * awaiting a queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Elections", "adminID", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("Elections", {
      fields: ["adminID"],
      type: "foreign key",
      references: {
        table: "Admins",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /*
     * Adding an reverting commands here
     * Example are:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Election", "adminID");
  },
};
