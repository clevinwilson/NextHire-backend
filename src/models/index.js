const sequelize = require("../config/db");
const User = require("./user.model");

// // Relationships
// User.hasMany(Application, { foreignKey: "userId" });
// Application.belongsTo(User, { foreignKey: "userId" });

// Job.hasMany(Application, { foreignKey: "jobId" });
// Application.belongsTo(Job, { foreignKey: "jobId" });

// Company.hasMany(Job, { foreignKey: "companyId" });
// Job.belongsTo(Company, { foreignKey: "companyId" });

module.exports = { sequelize, User};
