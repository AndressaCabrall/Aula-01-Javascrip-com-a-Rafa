

// 01- criamos a função adicionar tarefa para ser acionada com o onclik

function adicionarTarefa() {

    // 02- criamos a variável que vai buscar o input no html

    const Tarefa = document.getElementById("InputTarefa")
    const mensagem = document.getElementById("mensagem")

    // 03- criamos uma nova variável que pega o valor do input adicionado pelo usuário e armazena seu valor

    let NovaTarefa = Tarefa.value.trim()

    //04- criamos a condicional de se for isso ou se não for isso (if e else)

    if (NovaTarefa == "") {

        let mensagemErro = "Por favor, adicione uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red";
    }
    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "green";
        

        //06- criamos a variável para a lista de tarefas
        const Ul = document.getElementById("ListaTarefas")

        let Lista = document.createElement("li")

        Lista.textContent = NovaTarefa
        //07- A lista de tarefas interagindo com a UL
        Ul.appendChild(Lista)

    }

    // 08- Aqui limpamos o campo das tarefas adicionadas

    Tarefa.value = ""














}






