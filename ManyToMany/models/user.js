const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
    });
  }

  static associate(db) {
    db.User.belongsToMany(db.User, {
      foreignKey: 'followerId',
      as: 'Followings',
      through: 'Follow',
    });
    db.User.belongsToMany(db.User, {
      foreignKey: 'followingId',
      as: "Followers",
      through: 'Follow',
    });
  }
};
