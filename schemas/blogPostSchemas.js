const joi = require('joi');

const schemasBlogPost = joi.object({
    title: joi.string().required().empty().messages({
        'any.required': '400|"title" is required',
    }),
    content: joi.string().required().empty().messages({
        'any.required': '400|"content" is required',
    }),
});

module.exports = schemasBlogPost;