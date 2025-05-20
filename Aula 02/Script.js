// criamos a função adicionar tarefa
function adicionarTarefa() {
    
    // criamos a variável que vai dar uma mensagem qdo acionada pelo onclik

    let mensagem = "Tarefa adicionada com sucesso!";

    let Tarefa = document.getElementById("InputTarefa")

// aqui pegamos o valor da tarefa adionada

    let NovaTarefa = Tarefa.value

    document.getElementById("mensagem").textContent = mensagem;

//criamos a variável para a lista de tarefas

    let Ul = document.getElementById("ListaTarefas")

    let Lista = document.createElement("li")

    Lista.textContent = NovaTarefa

    //a lista de tarefas interagindo com a UL

    Ul.appendChild(Lista)

   // aqui o campo de lista de tarefas sendo limpa
   
    Tarefa.value = ""









}