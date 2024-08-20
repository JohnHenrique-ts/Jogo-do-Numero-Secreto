let listaDeNumeroSecreto = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNaTela('p', `O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'}`);
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    if (listaDeNumeroSecreto.length === numeroLimite) listaDeNumeroSecreto = [];
    
    let numeroEscolhido;
    do {
        numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;
    } while (listaDeNumeroSecreto.includes(numeroEscolhido));

    listaDeNumeroSecreto.push(numeroEscolhido);
    return numeroEscolhido;
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();








