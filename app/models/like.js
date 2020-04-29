const Sequelize = require('sequelize');
const client = require('../database');

class Like extends Sequelize.Model {

}

Like.init({}, {
    sequelize: client,
    tableName: "like"
})

module.exports = Like;