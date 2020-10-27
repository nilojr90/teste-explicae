const sortearURL = "http://localhost:3000/sortear/";


function isSorteado(resultados, numero) {
    for (let i = 0; i < resultados.length; i++) {
        if (resultados[i] == numero) {
            return true;
        }
    }
}


function gerarVolante(volante_id, dezenas) {
    let volante = document.getElementById(volante_id);

    for (let d = 0; d < 6; d++) {
        let linha = document.createElement("tr");
        volante.appendChild(linha);

        for (let u = 0; u < 10; u++) {
            let coluna = document.createElement("td");
            coluna.innerHTML = `${d}${u}`;

            if (isSorteado(dezenas, parseInt(coluna.innerHTML))) {
                coluna.className = 'sorteado';
            }

            linha.appendChild(coluna);
        }
    }

}

async function sortear(volante_id) {

    let resultado = await fetch(sortearURL, {
        method: 'GET',
        mode: 'cors',
    }).then(response => response.json().then(dezenas => {
        return dezenas;
    }));

    gerarVolante(volante_id, resultado);
}

function run() {
    sortear("volante-1");
    sortear("volante-2");
    sortear("volante-3");
}




