const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const config = require('../config/config');
const db = {}

const sequelize = new Sequelize({
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
})

db.User = require('./User')(sequelize, Sequelize.DataTypes);

module.exports = db;