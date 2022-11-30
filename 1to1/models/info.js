const Sequelize = require('sequelize');

module.exports = class Info extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      race: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      home: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Info',
      tableName: 'infos',
      paranoid: false,
      // charset: 'utf8mb4',
      // collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Info.hasOne(db.User, /*{ foreignKey: 'customUserId', sourceKey: 'id', /*onDelete : "cascade", onUpdate : "cascade"}*/);
  }
  // Comment가 User에 속한다. Comment의 Column "commenter"는 User의 "id"를 참조한다.
};