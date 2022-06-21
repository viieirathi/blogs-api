const express = require('express');
const controller = require('../controllers/user');
const validations = require('../middlewares/validations');
const schemasUser = require('../schemas/userSchemas');
const authToken = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/', validations(schemasUser), controller.userControllerCreate);
router.get('/', authToken, controller.getUserAlls);
router.get('/:id', authToken, controller.getUserId);

module.exports = router;