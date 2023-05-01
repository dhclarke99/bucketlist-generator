const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BucketListItem extends Model {}


BucketListItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bucketListItem',
  }
);

module.exports = BucketListItem;