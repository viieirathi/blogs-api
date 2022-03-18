const express = require('express');
const controller = require('../controllers/categories');
const authToken = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/', authToken, controller.controllerCategoriesCreate);
router.get('/', authToken, controller.controllerCategoriesAll);

module.exports = router;