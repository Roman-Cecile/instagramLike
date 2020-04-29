const Sequelize = require('sequelize');
const client = require('../database');

class Image extends Sequelize.Model {

}

Image.init({
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    path: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize: client,
    tableName: "image"
})

module.exports = Image;