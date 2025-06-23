const Joi = require('joi');

const companySchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required().messages({
        'string.base': 'Name must be a string',
        'string.empty': 'Company name is required',
        'any.required': 'Company name is required'
    }),
    description: Joi.string().trim().max(500).optional(),
    logoUr: Joi.string().uri().optional().label('Logo URL'),
    backgroundImageUrl: Joi.string().uri().optional().label('Background Image URL'),
    websiteUrl: Joi.string().uri().optional().label('Website URL'),
    industry: Joi.string().trim().max(100).optional(),
    location: Joi.string().trim().max(100).optional()
});

module.exports = { companySchema };
