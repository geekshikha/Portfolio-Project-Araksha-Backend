"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",

          password: bcrypt.hashSync("test1234", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Hina",
          email: "hina@hina.com",

          password: bcrypt.hashSync("1234", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Joe",
          email: "joe@jja.com",

          password: bcrypt.hashSync("1234", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vienna",
          email: "vienna@08.com",

          password: bcrypt.hashSync("1234", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Storm",
          email: "storm@new.com",

          password: bcrypt.hashSync("1234", SALT_ROUNDS),

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
