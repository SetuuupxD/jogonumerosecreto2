let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTXTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMsgnInicial();

function exibirMsgnInicial() {

exibirTXTela('h1','Jogo do numero secreto 2');
exibirTXTela('p', 'Escolha um numero entre 1 e 10');

}

function verificarChute() {
    let chute = document.querySelector('input').value;
      
    if (chute == numeroSecreto) {
     exibirTXTela('h1', 'Acertou!');
     let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
     let mensagemTentativas = `Voçê descobriu o numero secreto com ${tentativas} ${palavraTentativas}.`;
     exibirTXTela('p', mensagemTentativas);
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
          exibirTXTela('p', 'O numero é menor');
    } else {
          exibirTXTela('p', 'O numero secreto é maior');
    }
      tentativas++;
      limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaNumeroSorteados.length;

    if (quantidadeDeElementosLista == numeroLimite) {
        listaNumeroSorteados = [];
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
      return numeroEscolhido; 
    }     
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function novoJogo() {
      numeroSecreto = gerarNumeroAleatorio();
      limparCampo();
      tentativas = 1;
      exibirMsgnInicial();
      document.getElementById('reiniciar').setAttribute('disabled', true); 
}



