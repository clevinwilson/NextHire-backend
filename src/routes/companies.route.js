const express = require('express');
const router = express.Router();
const { createCompanyHandler, getCompanies } = require('../controllers/companies.controller');
const verifyToken = require('../middleware/verifyToken');
const { companySchema } = require('../validations/company.validation');
const validate = require('../middleware/validate');
const paginate = require('../middleware/pagination');

router.get('/', paginate, getCompanies);
router.post('/create', verifyToken, validate(companySchema), createCompanyHandler);

module.exports = router;
