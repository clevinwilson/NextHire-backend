const Company = require('../models/company.model');

exports.createCompany = async (data, admin) => {
    const { name, description, logoUrl, websiteUrl, industry, location } = data;

    const newCompany = await Company.create({
        name,
        description,
        logoUrl,
        websiteUrl,
        industry,
        location,
        admin
    });

    if (!newCompany) {
        throw new AppError('Error creating company', 500, 'INVALID_COMPANY');
    }
    return newCompany;
};
