const { DataTypes } = require('sequelize');

const Attributes = {
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
 };

  const User = (sequelize) => {
    const Users = sequelize.define(
      'User', Attributes,
      {
        timestamps: false,
        tableName: 'Users',
      },
    );
    Users.associate = (models) => {
      Users.hasMany(models.BlogPosts, {
        foreignKey: 'userId',
        as: 'blogposts',
      });
    };
    return Users;
  };

  module.exports = User;