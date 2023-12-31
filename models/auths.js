"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class auths extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      auths.usersProperties = auths.hasOne(models.usersProperties, {
        foreignKey: "userId",
      });
      auths.hasMany(models.individualTickets, { foreignKey: "userId" });
      auths.hasMany(models.events, { foreignKey: "creatorId" })
      // auths.hasMany(models.poster);
    }
  }
  auths.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      isVerified: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "auths",
      // paranoid: true,
    }
  );
  return auths;
};
