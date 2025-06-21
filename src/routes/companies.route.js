const express = require('express');
const { createCompanyHandler } = require('../controllers/companies.controller');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

router.post('/create', verifyToken, createCompanyHandler);

module.exports = router;
