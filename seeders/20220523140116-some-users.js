"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "testuser",
          email: "test@test.com",
          phone: 123456,

          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          fullname: "Hina",
          email: "hina@hina.com",
          phone: 123457,

          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Joe",
          email: "joe@jja.com",
          phone: 123457,

          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Vienna",
          email: "vienna@08.com",
          phone: 123457,

          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Storm",
          email: "storm@new.com",
          phone: 123457,

          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          image: "",
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
