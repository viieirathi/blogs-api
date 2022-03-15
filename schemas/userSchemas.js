const joi = require('joi');

const schemasUser = joi.object({
    displayName: joi.string().min(8).required().messages({
        'any.required': '400|"displayName" is required',
        'string.min': '400|"displayName" length must be at least 8 characters long',
    }),
    email: joi.string().email().required().messages({
        'any.required': '400|"email" is required',
        'string.email': '400|"email" must be a valid email',
    }),
    password: joi.string().length(6).required().messages({
        'any.required': '400|"password" is required',
        'string.length': '400|"password" length must be 6 characters long',
    }),
    image: joi.string(),
});

module.exports = schemasUser;