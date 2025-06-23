const { createCompany } = require('../services/companies.service');

exports.createCompanyHandler = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
        const newCompany = await createCompany(req.body, req.user.id);

        if (!newCompany) {
            return res.status(400).json({ success: false, message: 'Error creating company' });
        }
        res.status(201).json({ success: true, data: newCompany });
    } catch (error) {
        next(error);
    }
};
