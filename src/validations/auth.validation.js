const Joi = require('joi');

const passwordSchema = Joi.string()
    .min(8)
    .message('Password must be at least 8 characters long')
    .pattern(/[A-Z]/)
    .message('Password must contain at least one uppercase letter')
    .pattern(/[a-z]/)
    .message('Password must contain at least one lowercase letter')
    .pattern(/[0-9]/)
    .message('Password must contain at least one number')
    .pattern(/[^A-Za-z0-9]/)
    .message('Password must contain at least one special character')
    .required();

const registerSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'in'] } }) // Example: allow specific TLDs or simply Joi.string().email()
        .required()
        .messages({
            'string.email': 'Invalid email address',
            'string.empty': 'Email is required',
            'any.required': 'Email is required'
        }),
    password: passwordSchema,
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match',
        'string.empty': 'Confirm Password is required',
        'any.required': 'Confirm Password is required'
    }),
    user_type: Joi.string().valid('job_seeker', 'employer').required().messages({
        'any.only': 'Invalid user type. Must be "job_seeker" or "employer"',
        'string.empty': 'User type is required',
        'any.required': 'User type is required'
    })
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = { registerSchema, loginSchema };
