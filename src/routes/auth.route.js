const express = require('express');
const router = express.Router();

const validate = require('../middleware/validate');
const { registerSchema } = require('../validations/auth.validation');
const authController = require('../controllers/auth.controller');

router.post('/register', validate(registerSchema), authController.register);

module.exports = router;
