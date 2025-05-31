
//[x ] Quero que o botão seja acionado quando for clicado
//[x ] Quero que ao adicionar uma tarefa o valor dela aparece na tela em forma de lista
//[x ] Quero que o usuário receba uma mensagem de tarefa adionada com sucesso ou erro
//[ ] Quero que o campo input seja limpo após adicionar a tarefa
//[ ] Quero poder apagar as tarefas adicionadas
//[ ] Quero poder fazer alteração na lista de tarefas



function adicionarTarefa() {

    const Tarefa = document.querySelector("Input")
    const mensagem = document.getElementById("mensagem")

    let valorDoInput = Tarefa.value.trim()

    if (valorDoInput == "") {

        let mensagemErro = "Por favor, adicione uma tarefa válida!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "red";
    }
    else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "green";



        let Li = document.createElement("li")

        Li.innerHTML = valorDoInput + '<span onclick = "deletarTarefa(this)">❌</span>'

       document.querySelector("ul").appendChild(Li);
       Li.style.justifyContent = "space-between";
       Li.style.display = "flex";
       Li.style.cursor = "pointer";
       
 

    }

    Tarefa.value = ""


}

function deletarTarefa(Li) {

   Li.parentElement.remove()


}

