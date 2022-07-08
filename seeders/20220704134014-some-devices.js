"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "devices",
      [
        {
          title: "Ring",
          description: "Beautiful Ring",
          price: 22,
          image:
            "https://images.unsplash.com/photo-1552234914-13f6e51124ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGp3ZWxsZXJ5JTIwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "Necklace",
          description: "Beautiful Necklace",
          price: 224,
          image:
            "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "Earrings",
          description: "Elegant Earring",
          price: 224,
          image:
            "https://media.istockphoto.com/photos/white-gold-emerald-earrings-picture-id1365870463?k=20&m=1365870463&s=612x612&w=0&h=wbxj_erJYiyF15NjELh7eB4lZW__1UxD58qGcZVyxkw=",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "Collar",
          description: "Pretty Collar",
          price: 224,
          image:
            "https://images.unsplash.com/photo-1610714520720-ba92ae46e0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
        },
        {
          title: "Wallet",
          description: "Nice",
          price: 224,
          image:
            "https://images.unsplash.com/photo-1611099024089-7f57ca9aca7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("devices", null, {});
  },
};
