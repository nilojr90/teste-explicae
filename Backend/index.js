const express = require('express');
const { request } = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.get('/sortear', (req, res) => {
    res.send("Servidor Ativo!")
})