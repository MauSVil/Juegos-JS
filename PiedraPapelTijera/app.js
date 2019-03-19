
var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
// var global_option;
var option;
var resultado;
var min=0;

var papel= document.getElementById('papel')
var piedra = document.getElementById('piedra')
var tijera = document.getElementById('tijera')
var userScore = document.getElementById('user-score')
var pcScore = document.getElementById('pc-score')
var final = document.getElementById('final')
var finalcontainer=document.getElementById('final-container')
var messagecontainer = document.getElementById('message-container')
var message = document.getElementById('message')
var piedrapc = document.getElementById('piedrapc')
var papelpc = document.getElementById('papelpc')
var tijerapc = document.getElementById('tijerapc')
var game = document.getElementById('game')
var instructions = document.getElementById('instructions')
var header = document.getElementById('header')

papel.addEventListener("click", escogistePapel);
piedra.addEventListener("click", escogistePiedra);
tijera.addEventListener("click", escogisteTijera);

function init(){
  game.style.display = "none"
  header.style.display = "none"
  countDown()
  setTimeout(show,4000)
}

function countDown(){
  var n = 3;
  var contador = document.getElementById('contador')
  window.setInterval(function(){
    contador.innerHTML = n;
    n--;
    console.log(n);
  },1000);
}

function show(){
  game.style.display = "block";
  header.style.display = "flex";
  instructions.style.display = "none";

}

function escogistePapel(){
  var option= 3;
  num = random(1,3)
  // setTimeout(cambiarImagen,1000)
  // setTimeout( function () { comprobacion ( num, option ); }, 1500 )
  resaltarImagen(option)
  cambiarImagen();
  comprobacion(num, option);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
  // final();
  mensaje();
}

function escogistePiedra(){
  var option = 1;
  num = random(1,3);
  // setTimeout(cambiarImagen,1000)
  // setTimeout( function () { comprobacion ( num, option ); }, 1500 )
  resaltarImagen(option)
  cambiarImagen();
  comprobacion(num, option);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
  // final();
  mensaje();
}

function escogisteTijera(){
  var option = 2;
  num = random(1,3)
  // setTimeout(cambiarImagen,1000)
  // setTimeout( function () { comprobacion ( num, option ); }, 1500 )
  resaltarImagen(option)
  cambiarImagen();
  comprobacion(num, option);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
  // final();
  mensaje();
}

function random(minimo, maximo){
  return Math.floor(Math.random()*(maximo-minimo +1)+ minimo);
}

function comprobacion(global_option, numero){
  if (numero == global_option) {
    console.log('Es un empate');
    final.innerHTML = "Empate"
    finalcontainer.style.background = "gray"
    contador3=0;
  }

  else if (numero == 1 && global_option == 2){
    contador1++;
    console.log("Ganaste");
    final.innerHTML = "Ganaste"
    finalcontainer.style.background = "#00800061";
    contador3++;
  }
  else if (numero == 1 && global_option == 3){
    contador2++;
    final.innerHTML = "Perdiste"
    console.log("Perdiste");
    finalcontainer.style.background = "#ff000082";
    contador3--;
  }
  else if (numero == 2 && global_option == 3){
    contador1++;
    final.innerHTML = "Ganaste"
    console.log("Ganaste");
    finalcontainer.style.background = "#00800061";
    contador3++;
  }
  else if (numero == 2 && global_option == 1){
    contador2++;
    final.innerHTML = "Perdiste"
    console.log("Perdiste");
    finalcontainer.style.background = "#ff000082";
    contador3--;
  }
  else if(numero == 3 && global_option == 2){
    contador2++;
    final.innerHTML = "Perdiste"
    console.log("Perdiste");
    finalcontainer.style.background = "#ff000082";
    contador3--;
  }
  else if (numero == 3 && global_option == 1){
    contador1++;
    final.innerHTML = "Ganaste"
    console.log("Ganaste");
    finalcontainer.style.background = "#00800061";
    contador3++;
  }
}


//En proceso
function final(){
  if(contador2 == 2){
    alert('Perdiste 2 de 3');
    contador1=0;
    contador2=0;
  }

  else if(contador1 == 2){
    alert('Ganaste 2 de 3');
    contador1=0;
    contador2=0;
  }
}

function mensaje(){
  switch (contador3) {
    case 2:
      randomPositiveMessage();
      contador3=0;
      setTimeout(clearMessage, 2000);
      break;
    case -2:
      randomNegativeMessage();
      contador3=0;
      setTimeout(clearMessage, 2000);
      break;
    default:

  }
}

function clearMessage(){
  messagecontainer.innerHTML = "";
}

function randomPositiveMessage(){
  p = random(1,4);
  switch (p) {
    case 1:
      messagecontainer.innerHTML = "<p id='final'>Bien hecho</p>"
      break;
    case 2:
      messagecontainer.innerHTML = "<p id='final'>Estas on Fire!</p>"
      break;
    case 3:
      messagecontainer.innerHTML = "<p id='final'>Wooow, tranquilo</p>"
      break;
    case 4:
      messagecontainer.innerHTML = "<p id='final'>Nadie puede contra ti</p>"
      break;
    default:
  }
}

function randomNegativeMessage(){
  p = random(1,4);
  switch (p) {
    case 1:
    messagecontainer.innerHTML = "<p id='final'>Buuuuu</p>"
      break;
    case 2:
      messagecontainer.innerHTML = "<p id='final'>Dedicate a otra cosa</p>"
      break;
    case 3:
      messagecontainer.innerHTML = "<p id='final'>Malisimo</p>"
      break;
    case 4:
      messagecontainer.innerHTML = "<p id='final'>Necesitas ayuda?</p>"
      break;
    default:
  }
}

function cambiarImagen(){
  switch (num) {
    case 1:
      piedrapc.style.opacity = "1";
      papelpc.style.opacity = "0.5";
      tijerapc.style.opacity = "0.5";
      console.log("PC: Piedra");
      break;
    case 2:
      piedrapc.style.opacity = "0.5";
      papelpc.style.opacity = "0.5";
      tijerapc.style.opacity = "1";
      console.log("PC: Tijeras");
      break;
    case 3:
      piedrapc.style.opacity = "0.5";
      papelpc.style.opacity = "1";
      tijerapc.style.opacity = "0.5";
      console.log("PC: Papel");
      break;
    default:

  }
}

function resaltarImagen(option){
  switch (option) {
    case 1:
      piedra.style.opacity = "1";
      papel.style.opacity = "0.5";
      tijera.style.opacity = "0.5";
      break;
    case 2:
      piedra.style.opacity = "0.5";
      papel.style.opacity = "0.5";
      tijera.style.opacity = "1";
      break;
    case 3:
      piedra.style.opacity = "0.5";
      papel.style.opacity = "1";
      tijera.style.opacity = "0.5";
      break;
    default:

  }
}
