"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rating.belongsTo(models.user);
      rating.belongsTo(models.device);
    }
  }
  rating.init(
    {
      star: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "rating",
    }
  );
  return rating;
};
