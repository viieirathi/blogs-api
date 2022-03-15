const joi = require('joi');

const schemasLogin = joi.object({
    email: joi.string().email().required().messages({
        'any.required': '400|"email" is required',
        'string.email': '400|"email" is not allowed to be empty',
    }),
    password: joi.string().length(6).required().messages({
        'any.required': '400|"password" is required',
        'string.length': '400|"password" length must be 6 characteres email',
    }),
});

module.exports = schemasLogin;