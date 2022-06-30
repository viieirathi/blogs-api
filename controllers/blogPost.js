const { blogPostAll, postsCreate, blogPostsId, updatePostId, deletePostId, searchTitle, searchContent } = require('../services/blogPost');
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

const getPostId = async (req, res, _next) => {
  const { id } = req.params;
  const postId = await blogPostsId(id);
  
  if (!postId) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(postId);
};

const updatePost = async (req, res, _next) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const updateBlogPost = await blogPostsId(id);

  const { userId } = updateBlogPost;

  if (req.tokenData.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  await updatePostId({ id, title, content });
  return res.status(200).json(updateBlogPost);
};

const deleteIdPost = async (req, res, _next) => {
  const { id } = req.params;

  const blogPostId = await blogPostsId(id);

  if (!blogPostId) return res.status(404).json({ message: 'Post does not exist' });

  const { userId } = blogPostId;

  if (req.tokenData.id !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
 
  await deletePostId(id);

  return res.status(204).end();
};

const searchPosts = async (req, res, _next) => {
  const { q } = req.query;
  
  if (q === '') {
    const getAll = await blogPostAll();
    return res.status(200).json(getAll);
  }
  const qTitle = await searchTitle(q);
  
  if (qTitle) {
    return res.status(200).json([qTitle]);
  }

  const qContent = await searchContent(q);
  if (qContent) {
    return res.status(200).json([qContent]);
  }
  return res.status(200).json([]);
};

module.exports = { 
  getPostAll,
  blogPostsCreate,
  getPostId,
  updatePost,
  deleteIdPost,
  searchPosts,
};