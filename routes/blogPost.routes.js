const express = require('express');
const controller = require('../controllers/blogPost');
const authToken = require('../middlewares/auth.middlewares');
const validations = require('../middlewares/validations');
const schemasBlogPost = require('../schemas/blogPostSchemas');
const schemasPost = require('../schemas/postSchemas');

const router = express.Router();

router.post('/', authToken, validations(schemasPost), controller.blogPostsCreate);
router.get('/', authToken, controller.getPostAll);
router.get('/search', authToken, controller.searchPosts);
router.get('/:id', authToken, controller.getPostId);
router.put('/:id', authToken, validations(schemasBlogPost), controller.updatePost);
router.delete('/:id', authToken, controller.deleteIdPost);

module.exports = router;