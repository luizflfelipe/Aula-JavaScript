let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){         //Criada a função que permite modificar o texto da tela; Usando os parametros tag para selecionar tipo 'h1' e texto para colocar o texto que quiser;
    let campo = document.querySelector(tag);    //
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial(); // Caso a função não apareça, chame ela para fora;

function verificarChute(){
    let chute = document.querySelector('input').value; //Comando que lê o valor do chute;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa' ; // Se for >1 mostre tentativas :(caso contrario) tentativa
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p',`${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');    //Criando variaveis que mostram se o número é maior ou menor;
        } else {
            exibirTextoNaTela('p','O número secreto é maior!');
        }
    } tentativas++;
    limparCampo();
}
// Parseint para gerar um número inteiro; 
function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
