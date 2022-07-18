"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Women",
          image:
            "https://images.unsplash.com/photo-1579838333277-8b1b1f9d7856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGp3ZWxsZXJ5JTIwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kids",
          image:
            "https://media.istockphoto.com/photos/mother-helping-daughter-fasten-necklace-picture-id171102388?k=20&m=171102388&s=612x612&w=0&h=YRs1fV26T_fBW1aPZTqcXtQQ3oWR3mKflnC-Auzyzyk=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Men",
          image:
            "https://images.unsplash.com/photo-1611099144078-5596e87ef54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdhbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Pets",
          image:
            "https://images.unsplash.com/photo-1527526029430-319f10814151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBldCUyMGNvbGxhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seniors",
          image:
            "https://images.unsplash.com/photo-1490349708435-19d432984978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2658&q=90",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
