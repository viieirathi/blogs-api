const joi = require('joi');

const schemasLogin = joi.object({
    email: joi.string().email().required().empty()
    .messages({
        'any.required': '400|"email" is required',
        'string.empty': '400|"email" is not allowed to be empty',
    }),
    password: joi.string().length(6).required().empty()
    .messages({
        'any.required': '400|"password" is required',
        'string.empty': '400|"password" is not allowed to be empty',
    }),
});

module.exports = schemasLogin;