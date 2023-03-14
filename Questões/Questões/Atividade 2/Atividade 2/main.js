
// Função para exibir o resultado na tela
function exibirResultado() {
  interpretarIMC(imc);
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


function interpretarIMC(imc) {
  var divResultado = document.getElementById("resultado");
  // Interpreta o IMC
  if (imc < 18.5) {
    divResultado.innerHTML = "Abaixo do peso" ;
  } else if (imc >= 18.5 && imc < 25) {
    divResultado.innerHTML = "Peso normal" ;
  } else if (imc >= 25 && imc < 30) {
    divResultado.innerHTML = "Sobrepeso" ;
  } else {
    divResultado.innerHTML = "Obesidade" ;
  }
}

