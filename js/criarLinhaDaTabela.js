function criarTr(tarefa) {
    var trNovaTarefa = document.createElement("tr");
    trNovaTarefa.classList.add("linha-tarefa", "pendente");

    trNovaTarefa.appendChild(criaTdTarefa(tarefa));
    trNovaTarefa.appendChild(criaTdEditar());
    trNovaTarefa.appendChild(criaTdExcluir());

    return trNovaTarefa;
}

function criaLabel(tarefa) {
    var label = document.createElement('label');
    label.classList.add("tarefa");
    label.setAttribute('onclick', 'check()');
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "tarefa";
    var textoTarefa = document.createElement("p");
    textoTarefa.textContent = tarefa;
    label.appendChild(checkbox);
    label.appendChild(textoTarefa);

    return label;
}

function criaTdTarefa(tarefa) {
    var td = document.createElement('td');
    td.classList.add("td-tarefa");
    td.appendChild(criaLabel(tarefa));

    return td;
}

function criaTdEditar() {
    var tdEditar = document.createElement('td');
    tdEditar.classList.add("td-editar");

    var btnEditar = document.createElement('button');
    btnEditar.classList.add("btn-editar");
    btnEditar.setAttribute('onclick', 'funcaoEditar()');
    var img = document.createElement('img');
    img.classList.add("icone", "edit-icon");
    img.src = "images/Icon-edit.svg";
    img.alt = "Icone de editar";

    tdEditar.appendChild(btnEditar);
    btnEditar.appendChild(img);

    return tdEditar;
}

function criaTdExcluir() {
    var tdExcluir = document.createElement('td');
    tdExcluir.classList.add("td-excluir");

    var btnExcluir = document.createElement('button');
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.setAttribute('onclick', 'funcaoExcluir()');
    var img = document.createElement('img');
    img.classList.add("icone", "trash-icon");
    img.src = "images/Icon-trash.svg";
    img.alt = "Icone de lixeira";

    tdExcluir.appendChild(btnExcluir);
    btnExcluir.appendChild(img);

    return tdExcluir;
}