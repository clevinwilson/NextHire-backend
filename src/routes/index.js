const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route');
const companiesRoutes = require('./companies.route');

router.use('/auth', authRoutes);
router.use('/companies', companiesRoutes);

module.exports = router;
