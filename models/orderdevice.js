"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderDevice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderDevice.belongsTo(models.order);
      orderDevice.belongsTo(models.device);
    }
  }
  orderDevice.init(
    {
      quantity: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      deviceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderDevice",
    }
  );
  return orderDevice;
};
