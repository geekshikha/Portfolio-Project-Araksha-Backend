"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("devices", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("orders", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("ratings", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("ratings", "deviceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "devices",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("devices", "categoryId");
    await queryInterface.removeColumn("orders", "userId");
    await queryInterface.removeColumn("ratings", "userId");
    await queryInterface.removeColumn("ratings", "deviceId");
  },
};
