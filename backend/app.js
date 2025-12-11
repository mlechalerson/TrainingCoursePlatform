const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("Jak to widzisz to działa")
})

const loginRoutes = require('./routes/login.js');
app.use('/login',loginRoutes);

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})