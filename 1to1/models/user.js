const Sequelize = require('sequelize');

// module.exports = class User extends Sequelize.Model {
//   static init(sequelize) {
//     return super.init({
//       name: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       nickname: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       age: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       race: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       country: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       home: {
//         type: Sequelize.STRING(45),
//         allowNull: false,
//       },
//       height: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       weight: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//     }, {
//       sequelize,
//       timestamps: true,
//       underscored: false,
//       modelName: 'User',
//       tableName: 'users',
//       paranoid: false,
//       // charset: 'utf8mb4',
//       // collate: 'utf8mb4_general_ci',
//     });
//   }

//   static associate(db) {
//     db.User.hasOne(db.Info /*{ foreignKey: 'customUserId', targetKey: 'id', /*onDelete : "cascade", onUpdate : "cascade"}*/);
//   }
//   // Comment가 User에 속한다. Comment의 Column "commenter"는 User의 "id"를 참조한다.
// };

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      nickname: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      // charset: 'utf8mb4',
      // collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.User.belongsTo(db.Info /*{ foreignKey: 'customUserId', targetKey: 'id', /*onDelete : "cascade", onUpdate : "cascade"}*/);
  }
  // Comment가 User에 속한다. Comment의 Column "commenter"는 User의 "id"를 참조한다.
};