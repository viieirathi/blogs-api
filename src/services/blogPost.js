const { BlogPosts, PostsCategories, User, Categories } = require('../models');

const postsCreate = async (postsInfo, categoriesInfo) => {
    const createPosts = await BlogPosts.create(postsInfo);
    const { id } = createPosts;
    await Promise.all(categoriesInfo.map((e) => (
        PostsCategories.create({ postId: id, categoryId: e })
    )));
    return createPosts;
};

const blogPostAll = async () => {
    const blogPostsAll = await BlogPosts.findAll({
        include: [{
            model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
        }, {
            model: Categories,
            as: 'categories',
            through: {
                attributes: [],
            },
        }],
    });
    return blogPostsAll;
};

module.exports = { blogPostAll, postsCreate };