"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userDevice.belongsTo(models.user);
      userDevice.belongsTo(models.device);
    }
  }
  userDevice.init(
    {
      serialNumber: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      deviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userDevice",
    }
  );
  return userDevice;
};
