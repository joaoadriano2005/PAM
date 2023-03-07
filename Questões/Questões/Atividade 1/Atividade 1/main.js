var resultado=0;

// Função para exibir o resultado na tela
function exibirResultado() {
  
  var divResultado = document.getElementById("Resultado");
  divResultado.innerHTML = "Seu "+marca1+" "+modelo1+" Fez"+" "+resultado+" KM/L" ;
 

}

// Função para realizar o cálculo
function calcular() {
  // Lê os valores dos inputs
  var km = Number(document.getElementById("input1").value);
  var gas = Number(document.getElementById("input2").value);
  var marca = document.getElementById("marca").value;
  var modelo = document.getElementById("modelo").value;
  resultado = km / gas;
 marca1=marca
 modelo1=modelo


  exibirResultado();
}

// Exibe o resultado na tela quando a página for carregada
window.onload = function() {
  exibirResultado();
};
