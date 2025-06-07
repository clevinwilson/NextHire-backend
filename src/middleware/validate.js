const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false, allowUnknown: true });
    if (error) {
        const errors = error.details.map((detail) => ({
            field: detail.path.join('.'),
            message: detail.message.replace(/['"]+/g, '')
        }));
        return res.status(400).json({ errors });
    }
    next();
};

module.exports = validate;
