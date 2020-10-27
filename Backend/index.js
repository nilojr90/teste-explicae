const express = require('express');
const { request } = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const sorteioService = require('./service/SorteioService');

const leitorArquivoService = require('./service/LeitorArquivoService');
const upload = multer(require('./config/upload'));

app.get('/sortear', (req, res) => {
    const resultado = sorteioService.execute();
    res.json(resultado).send();
})

app.post('/lerArquivo', upload.single('file'), async (req, res) => {
    const conteudoArquivo = await leitorArquivoService.execute(req.file.path);
    res.json(conteudoArquivo).send();
})

app.listen(port, () => {
    console.log(`Servidor Ativo! na porta: ${port}`)
})