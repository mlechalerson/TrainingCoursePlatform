const express = require('express')
const pool = require('../db')
const cors = require('cors');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../auth');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', authenticateToken, async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM "Course";`);
        res.json(result.rows);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: err })
    }
})

module.exports = router;