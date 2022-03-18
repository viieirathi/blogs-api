const { BlogPosts, PostsCategories } = require('../models');

const postsCreate = async (postsInfo, categoriesInfo) => {
    const createPosts = await BlogPosts.create(postsInfo);
    const { id } = createPosts;
    await Promise.all(categoriesInfo.map((e) => (
        PostsCategories.create({ postId: id, categoryId: e })
    )));
    return createPosts;
};

const blogPostAll = async () => {
    const blogPostsAll = await BlogPosts.findAll();
    return blogPostsAll;
};

module.exports = { blogPostAll, postsCreate };