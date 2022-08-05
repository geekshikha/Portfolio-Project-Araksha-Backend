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
          deviceId: 2,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 3,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 5,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 6,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 8,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 9,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 10,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 11,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 12,
        },
        {
          star: 4,
          comment: "Its very useful",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          deviceId: 13,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
