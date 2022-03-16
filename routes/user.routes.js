const express = require('express');
const controller = require('../controllers/user');
const validations = require('../middlewares/validations');
const schemasUser = require('../schemas/userSchemas');
const authorization = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/', validations(schemasUser), controller.userControllerCreate);
router.get('/', authorization, controller.getUserAlls);
router.get('/:id', authorization, controller.getUserId);

module.exports = router;