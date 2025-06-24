const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('job_seeker', 'recruiter', 'admin'),
        defaultValue: 'job_seeker'
    },
    companyId: { 
        type: DataTypes.INTEGER, 
        allowNull: true, 
        references: { model: 'Companies', key: 'id' }, 
        onDelete: 'CASCADE' 
    },
});

module.exports = User;
