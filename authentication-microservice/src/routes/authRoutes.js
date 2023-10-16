const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = router;

// Register a new user
router.post('/register', async (req, res) => {
  try {
    console.log(req.body);

    const { name, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('test');
    const user = new User({ name, username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
