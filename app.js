let listaDeNumerosSorteados= [];
let numeroMaximo = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function verificarChute() 
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        mudarEstadoBotoes('reiniciar','chutar');
    }
    else if (chute > numeroSecreto)
    {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
        limparCampo();
    }
    else
    {
        exibirTextoNaTela('h1', 'Errou!');
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
        limparCampo();
    }

    tentativas++;
}

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    console.log(listaDeNumerosSorteados.length);
    if (listaDeNumerosSorteados.length >= parseInt(numeroMaximo / 10))
    {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    mudarEstadoBotoes('chutar','reiniciar');
}

function exibirMensagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do Número Secreto.');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}:`);
}

function mudarEstadoBotoes(idBotao1, idBotao2)
{
    document.getElementById(idBotao1).removeAttribute('disabled');
    document.getElementById(idBotao2).setAttribute('disabled', true);
}






