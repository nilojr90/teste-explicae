const lerArquivoURL = "http://localhost:3000/lerArquivo";

async function upload() {
    try {
        if (document.getElementById("arquivo").files.length == 0) {
            document.getElementById("tela").innerHTML = "Selecione um arquivo.";
        }
        else {
            let data = new FormData();
            data.append('title', 'teste');
            data.append('file', document.getElementById("arquivo").files[0]);

            await fetch(lerArquivoURL, {
                method: 'POST',
                mode: 'cors',
                body: data
            }).then(response => response.json().then(conteudoArquivo => {
                document.getElementById("tela").innerHTML = conteudoArquivo;
            }));
        }
    }
    catch (e) {
        console.log(e);
    }
}