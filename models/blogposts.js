const { DataTypes } = require('sequelize');

const Attributes = {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
    },
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
};

const BlogPosts = (sequelize) => {
    const blogPosts = sequelize.define('BlogPosts', Attributes, {
        timestamps: false,
        tableName: 'BlogPosts',
    });
    blogPosts.associate = (models) => {
        blogPosts.belongsTo(models.User, 
        { foreignKey: 'userId', as: 'users' });
    };
    return blogPosts;
};

module.exports = BlogPosts;