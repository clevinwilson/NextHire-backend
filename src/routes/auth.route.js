const express = require('express');
const router = express.Router();

const validate = require('../middleware/validate');
const { registerSchema, loginSchema, checkEmailSchema } = require('../validations/auth.validation');
const authController = require('../controllers/auth.controller');

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);
router.get('/check-email', validate(checkEmailSchema), authController.checkEmailExists);

module.exports = router;
