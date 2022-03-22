const { DataTypes, Sequelize } = require('sequelize');

const Attributes = {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
    },
    published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated: { 
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
};

const BlogPosts = (sequelize) => {
    const blogPosts = sequelize.define('BlogPosts', Attributes, {
        timestamps: false,
        tableName: 'BlogPosts',
    });
    blogPosts.associate = (models) => {
        blogPosts.belongsTo(models.User, 
        { foreignKey: 'userId', as: 'user' });
    };
    return blogPosts;
};

module.exports = BlogPosts;