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

exports.findAndCountAll = async (pagination, filters) => {
    const { limit, offset } = pagination;
    const { industry, location } = filters;
    const where = {};

    if (industry) where.industry = { [Op.iLike]: `%${industry}%` };
    if (location) where.location = { [Op.iLike]: `%${location}%` };

    return await Companies.findAndCountAll({
        where,
        limit,
        offset,
        order: [['createdAt', 'DESC']]
    });
};
