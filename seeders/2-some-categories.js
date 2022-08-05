"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Pets",
          image:
            "https://images.unsplash.com/photo-1527526029430-319f10814151?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBldCUyMGNvbGxhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Accessories",
          image:
            "https://images.unsplash.com/photo-1579838333277-8b1b1f9d7856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGp3ZWxsZXJ5JTIwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bikes",
          image:
            "https://images.unsplash.com/photo-1596372089183-5eb9aab2faaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg1fHxiaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Trolleys",
          image:
            "https://www.bagageonline.nl/media/catalog/product/cache/8b0434a0f4e1877e35ccbb896e197ea6/r/k/rk-7801a-kleur-blauw-voorkant.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Others",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTANhTisHC2dAWFHNB2cvltlJWH85CYjPwyVg&usqp=CAU",
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
