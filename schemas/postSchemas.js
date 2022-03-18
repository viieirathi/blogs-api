const joi = require('joi');

const schemasPosts = joi.object({
    title: joi.string().required().empty()
    .messages({
        'any.required': '400|"title" is required',
    }),
    content: joi.string().required().empty()
    .messages({
        'any.required': '400|"content" is required',
    }),
    categoryIds: joi.array().required().messages({
      'any.required': '400|"categoryIds" is required', 
    }),
});

module.exports = schemasPosts;