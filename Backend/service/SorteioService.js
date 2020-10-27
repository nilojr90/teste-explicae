module.exports = {

    execute() {
        let resultado = new Set();

        while (resultado.size < 6) {
            resultado.add(1 + Math.floor(Math.random() * 60));
        }

        return Array.from(resultado).sort((a, b) => a - b);
    }

}