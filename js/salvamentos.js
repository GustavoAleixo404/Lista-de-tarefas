if (localStorage.tarefas) {
    bucaLocal();
}

function salvarLocal() {
    localStorage.tarefas = document.querySelector('#lista-de-tarefas').innerHTML;
}

function bucaLocal() {
    document.querySelector('#lista-de-tarefas').innerHTML = localStorage.tarefas;
}