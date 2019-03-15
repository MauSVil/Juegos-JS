
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
var message = document.getElementById('message')
var image = document.getElementById('pc-im')

papel.addEventListener("click", escogistePapel);
piedra.addEventListener("click", escogistePiedra);
tijera.addEventListener("click", escogisteTijera);



function escogistePapel(){
  var option= 3;
  num = random(1,3)
  setTimeout(cambiarImagen,2000)
  comprobacion(num, option); //Ayuda
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
  // final();
  mensaje();
}

function escogistePiedra(){
  var option = 1;
  num = random(1,3);
  setTimeout(cambiarImagen,2000)
  comprobacion(num, 1);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
  // final();
  mensaje();
}

function escogisteTijera(){
  var option = 2;
  num = random(1,3)
  setTimeout(cambiarImagen,2000)
  comprobacion(num,2);
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
      break;
    case -2:
      randomNegativeMessage();
      contador3=0;
      break;
    default:

  }
}

function randomPositiveMessage(){
  p = random(1,4);
  switch (p) {
    case 1:
      message.innerHTML = "Bien hecho"
      break;
    case 2:
      message.innerHTML = "Estas on fire!"
      break;
    case 3:
      message.innerHTML = "Wooow, tranquilo"
      break;
    case 4:
      message.innerHTML = "Nadie puede contra ti"
      break;
    default:
  }
}

function randomNegativeMessage(){
  p = random(1,4);
  switch (p) {
    case 1:
      message.innerHTML = "Buuuu"
      break;
    case 2:
      message.innerHTML = "Dedicate a otra cosa"
      break;
    case 3:
      message.innerHTML = "Malisimo"
      break;
    case 4:
      message.innerHTML = "Necesitas ayuda?"
      break;
    default:
  }
}

function cambiarImagen(){
  switch (num) {
    case 1:
      image.setAttribute("src", "assets/piedra.jpg")
      console.log("PC: Piedra");
      break;
    case 2:
      image.setAttribute("src", "assets/tijeras.png")
      console.log("PC: Tijeras");
      break;
    case 3:
      image.setAttribute("src", "assets/papel.png")
      console.log("PC: Papel");
      break;
    default:

  }
}
