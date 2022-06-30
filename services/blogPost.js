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

const blogPostsId = async (id) => {
    const postsId = await BlogPosts.findOne({ where: { id },
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
    return postsId;
};

const updatePostId = async ({ id, title, content }) => {
    const postUpdate = await BlogPosts.update({ title, content }, { where: { id } });
    return postUpdate;
};

const deletePostId = async (id) => {
    const delPost = await BlogPosts.destroy({ where: { id } });
    return delPost;
};

const searchTitle = async (q) => {
    const searchQ = await BlogPosts.findOne({ where: { title: q },
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
    return searchQ;
};
    
const searchContent = async (q) => {
        const searchQ = await await BlogPosts.findOne({ where: { content: q },
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
        return searchQ;
};

module.exports = { blogPostAll, postsCreate, blogPostsId, updatePostId, searchTitle, searchContent, deletePostId };