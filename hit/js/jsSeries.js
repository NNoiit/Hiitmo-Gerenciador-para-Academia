function cadastrarSerie(){
    let key = document.getElementById("solicitante");
    let objeto = JSON.parse(localStorage.getItem(key));

    if (bancoDados.includes(login) == true) {
        objeto.serie = document.getElementById("navaSerie").value;
        let objetoJson = JSON.stringify(objeto);
        localStorage.setItem(key, objetoJson);
        
        document.getElementById("msgSeries").innerHTML = "<font color='red'>Serie cadastrada com exito!!</font>";

    } else {
        return document.getElementById("textoSerie").innerHTML = "<font color = 'red'>Usuario não encontrado </font>"
    }


}

function exibirSeries(){
    let key = localStorage.getItem("ultimoLogin");
    if( key !=undefined && key != ""){
    let objeto = JSON.parse(localStorage.getItem(key));
    key = JSON.parse(localStorage.getItem(objeto));

    return document.getElementById("instrutores").innerHTML = `
    <div id="Instrutor">
    <h1>${kay.name}</h1>
    <h4><${kay.cpf}/h4>
    <h4>${kay.matricula}</h4>
    <button type="button">Excluir</button>
    <button type="button">Alterar</button>
    </div>
    `
    }
}