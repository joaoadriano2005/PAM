
var resultado = 0;
// Função para exibir o resultado na tela
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "Seu IMC é: "+resultado ;
}

// Função para realizar o cálculo
function calcular(kg,alt) {
  // Lê os valores dos inputs
  var alt = document.getElementById("input1").value;
  var kg = document.getElementById("input2").value;

  alt=alt/100
  resultado = kg/(alt*alt)
  resultado=resultado.toFixed(1)
  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
