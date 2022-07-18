"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      device.belongsTo(models.category);
      device.hasMany(models.rating, { foreignKey: "deviceId" });
      //many-to-many
      device.belongsToMany(models.user, {
        through: "userDevices",
        foreignKey: "deviceId",
      });
      device.belongsToMany(models.order, {
        through: "orderDevices",
        foreignKey: "deviceId",
      });
    }
  }
  device.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "device",
    }
  );
  return device;
};
