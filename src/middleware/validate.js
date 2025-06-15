const validate = (schema) => (req, res, next) => {
    let data;
    if (req.method === 'GET' && Object.keys(req.query).length) {
        data = req.query;
    } else if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
        data = req.body;
    } else {
        data = req.params;
    }
    
    const { error } = schema.validate(data, { abortEarly: false, allowUnknown: true });
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
