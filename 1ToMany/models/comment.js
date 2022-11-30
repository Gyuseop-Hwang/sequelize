const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: false,
      // charset: 'utf8mb4',
      // collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id', /*onDelete : "cascade", onUpdate : "cascade"*/ });
  }
  // Comment가 User에 속한다. Comment의 Column "commenter"는 User의 "id"를 참조한다.
};
