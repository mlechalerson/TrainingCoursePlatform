const express = require('express')
const pool = require('../db')
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/', async(req, res) => {
  var{username, password} = req.body;
  try {
    var result = await pool.query('SELECT id, name, password, is_admin FROM "User" WHERE name = $1 AND password = $2',[username, password]);
    const user = result.rows[0];
    if(!user){
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    /*const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch){
      return res.status(401).json({ error: 'Invalid credentials' });
    }*/

    const token = jwt.sign(
      { userId: user.id , isAdmin: user.is_admin},
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      token: token, 
      id: user.id,
      admin: user.is_admin
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;