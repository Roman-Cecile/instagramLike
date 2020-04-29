const User = require('./user');
const Image = require('./image');

// User <-> Image
User.hasMany(Image, {
    foreignKey: "app_user_id",
    as: "images"
});

Image.belongsTo(User, {
    foreignKey: "app_user_id",
    as: "app_user"
});


// Image <-> Comment
Image.hasMany(Comment, {
    foreignKey: "image_id",
    as: "comments"
})

Comment.belongsTo(Image,{
    foreignKey: "image_id",
    as: "image"
})

module.exports = {
    User,
    Image,
    Comment
}
