
var resultado = 0;
// Função para exibir o resultado na tela
function exibirResultado() {
  var divResultado = document.getElementById("resultado");
  divResultado.innerHTML = "" ;
  function interpretarIMC(imc) {
  // Interpreta o IMC
  if (imc < 18.5) {
    divResultado.innerHTML = "" ;
  } else if (imc >= 18.5 && imc < 25) {
     divResultado.innerHTML = "" ;
  } else if (imc >= 25 && imc < 30) {
     divResultado.innerHTML = "" ;
  } else {
    divResultado.innerHTML = "" ;
  }
}

}

// Função para realizar o cálculo
function calcular(kg,alt) {
  // Lê os valores dos inputs
  var alt = document.getElementById("input1").value;
  var kg = document.getElementById("input2").value;

  alt=alt/100
  imc = kg/(alt*alt)
  imc=imc.toFixed(2)
  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
