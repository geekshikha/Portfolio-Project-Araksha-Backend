"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "devices",
      [
        {
          title: "Collar",
          description: "Pretty • Collar",
          price: 324,
          image:
            "https://images.unsplash.com/photo-1610714520720-ba92ae46e0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "Shoes",
          description: "Adorable • Shoes ",
          price: 224,
          image:
            "https://media.istockphoto.com/photos/small-french-bulldog-dog-puppy-with-umbrella-and-rain-boots-picture-id1363594241?k=20&m=1363594241&s=612x612&w=0&h=8U1mUdP8wFqM2o-lTfmltJxRBLtlI-XJ2mSNBWA0PPQ=",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "NeckPiece",
          description: "Holding Antique Locket • With Pictures   Inside",
          price: 100,
          image:
            "https://media.istockphoto.com/photos/womans-hand-holding-antique-locket-with-photos-of-children-and-pet-picture-id1091800452?s=612x612",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 1,
        },
        {
          title: "Ring",
          description: "Sterling • Silver Gemstone • Bypass Ring",
          price: 162,
          image:
            "https://images.unsplash.com/photo-1552234914-13f6e51124ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGp3ZWxsZXJ5JTIwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },
        {
          title: "Necklace",
          description: "Gold • Cubic • Zirconia Necklace",
          price: 424,
          image:
            "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lY2tsYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },

        {
          title: "Bracelet",
          description: "Round White • Pink Freshwater • Cultured Pearl",
          price: 100,
          image:
            "https://media.istockphoto.com/photos/gold-bracelets-accumulation-and-ring-on-a-woman-wrist-wearing-a-white-picture-id1348544609?k=20&m=1348544609&s=612x612&w=0&h=3Q-LiDKLE-xTSn5MroEJOsth-33Mj144W4YCCoSdTyY=",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },

        {
          title: "Ring",
          description: "Vintage Biker Signet • luxurious texture",
          price: 424,
          image:
            "https://images.unsplash.com/photo-1612285127364-58ede3fa1686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG1lbnMlMjByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 2,
        },

        {
          title: "Metal Bike",
          description: "Vintage Biker Signet • luxurious texture",
          price: 424,
          image:
            "https://images.unsplash.com/photo-1591047139334-337807f2b3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
        },
        {
          title: "Electric Bike",
          description: "Electric Bike  • No gear",
          price: 424,
          image:
            "https://images.unsplash.com/photo-1620711973925-1f67a54528c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGVsZWN0cmljJTIwYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 3,
        },
        {
          title: "Decent Transporto",
          description: "One Hand Luggage Trolley  • 55 Light Blue",
          price: 59,
          image:
            "https://www.bagageonline.nl/media/catalog/product/cache/a19cf5428adfa373f1b5c6af26e83736/r/k/rk-7801a-kleur-blauw-voorkant.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 4,
        },
        {
          title: "Samsonite Airea Spinner",
          description: "Strict Dark Blue  • Double adjustable drawbar ",
          price: 199,
          image:
            "https://www.bagageonline.nl/media/catalog/product/cache/a19cf5428adfa373f1b5c6af26e83736/1/3/133623-124710.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 4,
        },
        {
          title: "Wallet",
          description: "Hybrid RFID • top-quality leather",
          price: 224,
          image:
            "https://images.unsplash.com/photo-1611099024089-7f57ca9aca7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdhbGxldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 5,
        },

        {
          title: "Hiking Sticks",
          description: "Hike Easily",
          price: 124,
          image:
            "https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Fsa2luZyUyMHN0aWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
          categoryId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("devices", null, {});
  },
};
