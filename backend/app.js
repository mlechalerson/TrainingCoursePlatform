const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors');
const pool = require('./db.js');

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM "Course";`);
    res.json(result.rows);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: err })
  }
  
})

const loginRoutes = require('./routes/login.js');
app.use('/login',loginRoutes);

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})