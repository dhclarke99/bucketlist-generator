const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class BucketList extends Model {}


BucketList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bucketList',
  }
);

module.exports = BucketList;