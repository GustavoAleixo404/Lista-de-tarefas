document.querySelector('#input-nova-tarefa').addEventListener('keypress', () => {
    if (event.which == 13) document.querySelector('#btn-salvar').click();
});

document.querySelector('#btn-salvar').addEventListener('click', () => {
    var novaTarefa = document.querySelector('#input-nova-tarefa');
    if (novaTarefa.value != "") {
        document.querySelector('#tarefas-para-realizar').appendChild(criarTr(novaTarefa.value));
        novaTarefa.value = "";
        statusTarefas();
        salvarLocal();
    } else {
        var notificação = document.querySelector('#notificação');
        notificação.textContent = "Insira o nome da tarefa primeiro."
        novaTarefa.focus();
        setTimeout(() => {
            notificação.textContent = ""
        }, 3000);
    }
});

function check() {
    if (event.target.tagName == "INPUT") {
        event.target.toggleAttribute('checked');
        event.target.parentNode.parentNode.parentNode.classList.remove('pendente');
        event.target.parentNode.parentNode.parentNode.classList.add('feito');
        if (!event.target.checked) {
            event.target.parentNode.parentNode.parentNode.classList.remove('feito');
            event.target.parentNode.parentNode.parentNode.classList.add('pendente');
        }
        statusTarefas();
        salvarLocal();
    }
}

function funcaoExcluir() {
    if (confirm("Tem certeza que quer excluir essa tarefa?")) {
        var task = event.target.parentNode.parentNode.parentNode;
        task.classList.add("remove");
        setTimeout(() => {
            task.remove();
            statusTarefas();
            salvarLocal();
        }, 500);
    }
}

function funcaoEditar() {
    if (confirm("Editar essa tarefa?")) {
        textoParaEditar = event.target.parentNode.parentNode.parentNode.firstChild.firstChild.lastChild;
        var novoNome = prompt("Insira o novo nome para a tarefa:");
        if (novoNome) {
            textoParaEditar.textContent = novoNome;
            salvarLocal();
        }
    }
}

function statusTarefas() {
    var quantidadePendente = document.querySelectorAll('.pendente').length;
    var quantidadeFeito = document.querySelectorAll('.feito').length;
    var quantidadeTotal = document.querySelectorAll('.tarefa').length;
    if (quantidadeTotal >= 0) {
        if (quantidadeTotal <= 0) {
            document.querySelector('#resumo-tarefas').style.display = "none";
            document.querySelector('#titulo-tabela').textContent = "Nenhuma tarefa encontrada."
        } else {
            document.querySelector('#resumo-tarefas').style.display = "block";
            document.querySelector('#titulo-tabela').textContent = "Sua lista de Tarefas:"
        }

        if (quantidadePendente > 0 || quantidadeFeito) {
            document.querySelector('#tarefas-pendentes').textContent = "Número de tarefas pendentes: " + quantidadePendente;
            document.querySelector('#tarefas-feitas').textContent = "Número de tarefas realizadas: " + quantidadeFeito;
        }
    }

    salvarLocal();
}