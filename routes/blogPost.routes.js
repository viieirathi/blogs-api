const express = require('express');
const controller = require('../controllers/blogPost');
const authToken = require('../middlewares/auth.middlewares');
const validations = require('../middlewares/validations');
const schemasPost = require('../schemas/postSchemas');

const router = express.Router();

router.post('/', authToken, validations(schemasPost), controller.blogPostsCreate);
// router.post('/', authToken, (_req, res) => res.end());
router.get('/', authToken, controller.getPostAll);

module.exports = router;