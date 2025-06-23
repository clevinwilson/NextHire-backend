const Companies = require('../models/company.model');
const User = require('../models/user.model');

exports.createCompany = async (data, userId) => {
    const { name, description, logoUrl, websiteUrl, industry, location } = data;
    const newCompany = await Companies.create({
        name,
        description,
        logoUrl,
        websiteUrl,
        industry,
        location,
        admin: userId
    });

    await User.update({ companyId: newCompany.id, role: 'admin' }, { where: { id: userId } });

    if (!newCompany) {
        throw new AppError('Error creating company', 500, 'INVALID_COMPANY');
    }
    return newCompany;
};
