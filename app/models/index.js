const User = require('./user');
const Image = require('./image');
const Comment = require('./comment');
const Like = require('./like');

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

// Image <-> Comment
Image.hasMany(Like,{
    foreignKey: "image_id",
    as: "likes"
});

Like.belongsTo(Image,{
    foreignKey: "image_id",
    as: "image"
})


module.exports = {
    User,
    Image,
    Comment,
    Like
}
