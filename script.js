function carregarPagina(busca) {
    let localPagina = document.querySelector('#paginas')

    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = () => {
        if (requisicao.readyState == 4 && requisicao.status == 200) {
            localPagina.innerHTML = requisicao.response
        }
    }

    requisicao.open('GET', `${busca}.html`)
    requisicao.send()
}

function enviar() {
    var email = document.getElementById("input-formulario").value

    if (email == "") {
        alert("Insira um e-mail, por favor")
    } else {
        alert("E-mail cadastrado com sucesso!")

        document.getElementById("input-formulario").value = ""

    }
}

// Quiz

function respostaCorreta1() {
    document.querySelector("#questao1").style.backgroundColor = "#F0FFF0"
    document.querySelector("#botao-opcao1-correta").style.backgroundColor = "#6B8E23"
    document.querySelector("#botao-opcao1-correta").style.color = "white"
    document.querySelector("#botao-opcao1-correta").style.borderColor = "#6B8E23"

    document.querySelector("#mensagem1").innerHTML = "Correto!"

}

function respostaErrada1() {
    document.querySelector("#questao1").style.backgroundColor = "#FFE4E1"
    document.querySelector("#mensagem1").innerHTML = "Errado"
}

function respostaCorreta2() {
    document.querySelector("#questao2").style.backgroundColor = "#F0FFF0"
    document.querySelector("#botao-opcao2").style.backgroundColor = "#6B8E23"
    document.querySelector("#botao-opcao2").style.color = "white"
    document.querySelector("#botao-opcao2").style.borderColor = "#6B8E23"

    document.querySelector("#mensagem2").innerHTML = "Correto!"

}

function respostaErrada2() {
    document.querySelector("#questao2").style.backgroundColor = "#FFE4E1"

    document.querySelector("#mensagem2").innerHTML = "Errado"
}

function respostaCorreta3() {
    document.querySelector("#questao3").style.backgroundColor = "#F0FFF0"
    document.querySelector("#botao-opcao3").style.backgroundColor = "#6B8E23"
    document.querySelector("#botao-opcao3").style.color = "white"
    document.querySelector("#botao-opcao3").style.borderColor = "#6B8E23"

    document.querySelector("#mensagem3").innerHTML = "Correto!"

}

function respostaErrada3() {
    document.querySelector("#questao3").style.backgroundColor = "#FFE4E1"

    document.querySelector("#mensagem3").innerHTML = "Errado"
}

