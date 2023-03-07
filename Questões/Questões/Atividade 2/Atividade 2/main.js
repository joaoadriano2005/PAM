
var resultado = 0;
// Função para exibir o resultado na tela
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "Seu IMC é: "+resultado ;
}

// Função para realizar o cálculo
function calcular() {
  // Lê os valores dos inputs
  var alt = document.getElementById("input1").value;
  var kg = document.getElementById("input2").value;

  qua=alt*alt
  resultado = kg/qua;


  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
