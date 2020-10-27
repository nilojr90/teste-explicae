const express = require('express');
const { request } = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const sorteioService = require('./service/SorteioService');

app.get('/sortear', (req, res) => {
    const resultado = sorteioService.execute();
    res.json(resultado).send();
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})