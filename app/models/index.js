const User = require('./user');
const Image = require('./image');

User.hasMany(Image, {
    foreignKey: "app_user_id",
    as: "images"
});

Image.belongsTo(User, {
    foreignKey: "app_user_id",
    as: "app_user"
})

module.exports = {
    User,
    Image

}
