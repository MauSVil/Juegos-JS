
var contador1 = 0;
var contador2 = 0;
// var global_option;
var option;
var resultado;



var papel= document.getElementById('papel')
var piedra = document.getElementById('piedra')
var tijera = document.getElementById('tijera')
var userScore = document.getElementById('user-score')
var pcScore = document.getElementById('pc-score')


papel.addEventListener("click", escogistePapel);
piedra.addEventListener("click", escogistePiedra);
tijera.addEventListener("click", escogisteTijera);



function escogistePapel(){
  var option= 3;
  num = random(1,3)
  comprobacion(num, option);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
}

function escogistePiedra(){
  var option = 1;
  num = random(1,3);
  comprobacion(num, 1);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
}

function escogisteTijera(){
  var option = 2;
  comprobacion(random(1,3),2);
  userScore.innerHTML = contador1;
  pcScore.innerHTML = contador2;
}

function random(minimo, maximo){
  return Math.floor(Math.random()*(maximo-minimo +1)+ minimo);
}

function comprobacion(numero, global_option){
  if (numero == global_option) {
    console.log('Es un empate');
  }

  else if (numero == 1 && global_option == 2){
    contador1++;
  }
  else if (numero == 1 && global_option == 3){
    contador2++;
  }
  else if (numero == 2 && global_option == 3){
    contador1++;
  }
  else if (numero == 2 && global_option == 1){
    contador2++;
  }
  else if(numero == 3 && global_option == 2){
    contador2++;
  }
  else if (numero == 3 && global_option == 1){
    contador1++;
  }
}

if(contador2 == 2){
  alert('Perdiste 2 de 3');
}

else if(contador1 == 2){
  alert('Ganaste 2 de 3');
}
