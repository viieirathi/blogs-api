const express = require('express');
const controller = require('../controllers/user');
const validations = require('../middlewares/validations');
const schemasUser = require('../schemas/userSchemas');

const router = express.Router();

router.post('/', validations(schemasUser), controller.userControllerCreate);

module.exports = router;