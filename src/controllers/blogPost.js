const { blogPostAll, postsCreate } = require('../services/blogPost');
const { categorieAll } = require('../services/categories');

const blogPostsCreate = async (req, res, _next) => {
  try {
    const { id } = req.tokenData;
    const { title, content, categoryIds } = req.body;
    const categoryId = await categorieAll();
    const idsCategories = categoryId.map(({ dataValues: { id: ids } }) => ids);
    const validCategories = categoryIds.every((e) => idsCategories.includes(e));
    if (!validCategories) return res.status(400).json({ message: '"categoryIds" not found' });
    const { userId, id: postId } = await postsCreate({ userId: id, title, content }, categoryIds);
    return res.status(201).json({ id: postId,
       userId,
       title,
       content });
  } catch (error) {
    console.log(error);
  }
};
const getPostAll = async (_req, res, _next) => {
    const getPost = await blogPostAll();
    return res.status(200).json(getPost);
};

module.exports = { getPostAll, blogPostsCreate };