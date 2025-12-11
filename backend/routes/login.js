const express = require('express');
const cors = require('cors');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send("To jest strona do logowania");
})