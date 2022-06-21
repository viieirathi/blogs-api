const express = require('express');
const controller = require('../controllers/login');
const validations = require('../middlewares/validations');
const schemasLogin = require('../schemas/loginSchemas');

const router = express.Router();

router.post('/', validations(schemasLogin), controller.loginControllersCreate);

module.exports = router;