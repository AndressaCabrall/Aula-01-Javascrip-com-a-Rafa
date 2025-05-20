

function adicionarTarefa() {
    //let mensagem = "Tarefa adicionada com sucesso!";

    let Tarefa = document.getElementById("InputTarefa")

    let NovaTarefa = Tarefa.value

    document.getElementById("mensagem").textContent = NovaTarefa;

    let Ul = document.getElementById("ListaTarefas")

    let Lista = document.createElement("li")

    Lista.textContent = NovaTarefa

    Ul.appendChild(Lista)

    Tarefa.value = ""









}