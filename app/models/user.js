const Sequelize = require('sequelize');
const client = require('../database')

class User extends Sequelize.Model {

    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }

};

User.init({
    firstname: {
       type: Sequelize.TEXT,
       allowNull: false,
       validate: {
           notEmpty: true
       }
    } ,
    lastname: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
     } ,
    email: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
     } ,
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
     }
}, {
    sequelize: client,
    tableName: "app_user"
})

module.exports = User;