'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate (models) {
      models.role.hasMany(user, {
        foreignKey: {
          name: 'roleId'
        }
      });
      user.belongsTo(models.role, {
        foreignKey: {
          name: 'email'
        }
      });
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
    hooks: {
      beforeCreate: async (user, options) => {
        user.password = await bcrypt.hash(user.password, 2);
      }
    }
  }
  );
  return user;
};
