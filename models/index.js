const User = require('./User');
const Post = require('./Post');

// all model associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

