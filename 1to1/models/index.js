'use strict';

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require('./user.js');
const Info = require('./info.js');

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.User = User;
db.Info = Info;
Info.init(sequelize);
User.init(sequelize);

User.associate(db);
Info.associate(db);

module.exports = db;
