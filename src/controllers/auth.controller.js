// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const db = require('../config/db');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    // const hashed = await bcrypt.hash(password, 10);

    console.log(`Registering user with email: ${email}`);
    console.log(`password: ${password}`);
    
    res.status(201).json({ message: 'User registered successfully' });
    
    // try {
    //     res.status(201).json({ user: user.rows[0] });
    // } catch (err) {
    //     res.status(400).json({ message: 'User already exists or DB error' });
    // }
};
