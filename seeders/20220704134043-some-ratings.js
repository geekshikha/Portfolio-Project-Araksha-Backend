"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          deviceId: 1,
        },

        {
          star: 3,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
