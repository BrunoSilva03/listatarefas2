var contador = 0;


function adicionarTarefa() {
    let resultado = document.getElementById('areaLista');
    let input = document.getElementById('inputTarefa');
    let newTarefa;
    let valorInput = input.value;

    if (inputVazio(valorInput) == true) {
        alert('Digite a Tarefa por favor');

    } else {
        contador++;
        newTarefa =
        `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-button">
                <button onclick="excluirTarefa(${contador})" id="btnexcluir" class="delete" "><i class="mdi mdi-delete"></i>Excluir</button>
            </div>
        </div>
        `;

        resultado.innerHTML += newTarefa;

        input.value = '';
        input.focus();
    }

}


function inputVazio(valorInput) {
    if (valorInput == '' || valorInput == null || valorInput == undefined) {
        input = document.getElementById('inputTarefa');
        input.focus();
        return true;

    }
    return false;
}


function excluirTarefa(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');


    if(classe == "item") {

        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}