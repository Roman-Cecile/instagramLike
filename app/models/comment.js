const Sequelize = require('sequelize');
const client = require('../database');

class Comment extends Sequelize.Model {

}

Comment.init({
    content: {
        type: Sequelize.TEXT, 
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    sequelize: client,
    tableName: "comment"
});

module.exports = Comment;