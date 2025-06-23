const express = require('express');
const router = express.Router();
const { createCompanyHandler } = require('../controllers/companies.controller');
const verifyToken = require('../middleware/verifyToken');
const { companySchema } = require('../validations/company.validation');
const validate = require('../middleware/validate');

router.post('/create', verifyToken, validate(companySchema), createCompanyHandler);

module.exports = router;
