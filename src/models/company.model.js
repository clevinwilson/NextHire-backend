const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Companies = sequelize.define('Companies', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    logoUrl: { type: DataTypes.STRING },
    backgroundImageUrl: { type: DataTypes.STRING },
    websiteUrl: { type: DataTypes.STRING },
    industry: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    admin: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'Users', key: 'id' },
        onDelete: 'CASCADE'
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Companies;
