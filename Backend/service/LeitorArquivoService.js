const fs = require('fs');
const path = require('path');

module.exports = {
    async execute(caminhoArquivo) {

        try {
            const conteudoArquivo =
                fs.readFileSync(path.resolve(caminhoArquivo), 'utf8');
            return conteudoArquivo;
        } catch (erro) {
            console.error(erro);
        }
    }
}
