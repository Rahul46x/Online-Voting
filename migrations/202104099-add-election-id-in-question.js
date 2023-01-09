"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add an altering commands here.
     *
     * Example are:
     * await a queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("questions", "electionID", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("questions", {
      fields: ["electionID"],
      type: "foreign key",
      references: { table: "Elections", field: "id" },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add an reverting commands here.
     *
     * Example are:
     * await a queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("questions", "electionID");
  },
};
