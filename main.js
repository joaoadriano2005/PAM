// Declaração da variável global
var resultado = 0;

// Função para exibir o resultado na tela
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = resultado+"KM/L" ;
}

// Função para realizar o cálculo
function calcular() {
  // Lê os valores dos inputs
  var km = Number(document.getElementById("input1").value);
  var gas = Number(document.getElementById("input2").value);

  // Realiza a conta
  resultado = km / gas;

  // Exibe o resultado na tela
  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
