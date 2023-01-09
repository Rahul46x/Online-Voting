"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**Add a altering commands here**/
    await queryInterface.addColumn("Voters", "electionID", {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addConstraint("Voters", {
      fields: ["electionID"],
      type: "foreign key",
      references: {
        table: "Elections",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add an reverting commands here.
     *
     * Example:
     * awaita  queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("Voters", "electionID");
  },
};
