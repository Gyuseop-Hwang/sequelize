const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {

  static init(sequelize) {
    return super.init({
      // id : {
      //   type : Sequelize.INTEGER,
      //   allowNull : false,
      //   autoIncrement : true,
      // },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      married: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: false,
      // underscored: false,
      paranoid: false, // deletedAt : true -> soft delete 기능... 기본적인 삭제는 hard delete
      modelName: "User",
      tableName: "users",
    })
  }

  static associate(db) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" })
  }
  // Comment의 column "commenter"가 User의 Column "id"를 참조한다.

}