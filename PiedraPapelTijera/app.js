
var contador1 = 0;
var contador2 = 0;
// var global_option;
var option;



var papel= document.getElementById('papel')
var piedra = document.getElementById('piedra')
var tijera = document.getElementById('tijera')



papel.addEventListener("click", escogistePapel);
piedra.addEventListener("click", escogistePiedra);
tijera.addEventListener("click", escogisteTijera);



function escogistePapel(){
  var option= 3;
  num = random(1,3)
  // global_option = option;
  funciona(option);
  comprobacion(num, option);
}

function escogistePiedra(){
  var option = 1;
  // global_option = option;
  num = random(1,3)
  funciona(1);
  comprobacion(num, 1);
}

function escogisteTijera(){
  var option = 2;
  // global_option = option;
  funciona(2);
  comprobacion(random(1,3),2);
}


function funciona(global_option){
  switch (global_option) {
    case 1:
    console.log("Escogiste Piedra");
    break;

    case 2:
    console.log("Escogiste Tijera");
    break;

    case 3:
    console.log("Escogiste Papel");
    break;

    default:
    console.log("El global_option es: "+ global_option);
  }
}



// while (contador2<2) {  // contador1<2 || contado2<2
  // console.log('Usuario: ' + contador1);
  // console.log('Computadora: ' + contador2);
    // num = prompt('Escribe un numero: 1) Piedra, 2) Papel, 3) Tijeras');
    // while ((num !==1) || (num !== 2) || (num !== 3)){
      //   num = prompt('Escribe un numero: 1) Piedra, 2) Papel, 3) Tijeras')
      // }

function random(minimo, maximo){
  return Math.floor(Math.random()*(maximo-minimo +1)+ minimo);
}



function comprobacion(numero, global_option){
  if (numero == global_option) {
    alert('Es un empate')
  }

  else if (numero == 1 && global_option == 2){
    alert('Ganaste');
    contador1++;
  }
  else if (numero == 1 && global_option == 3){
    alert('Perdiste');
    contador2++;
  }
  else if (numero == 2 && global_option == 3){
    alert('Ganaste');
    contador1++;
  }
  else if (numero == 2 && global_option == 1){
    alert('Perdiste');
    contador2++;
  }
  else if(numero == 3 && global_option == 2){
    alert('Perdiste');
    contador2++;
  }
  else if (numero == 3 && global_option == 1){
    alert('Ganaste');
    contador1++;
  }
}

if(contador2 == 2){
  alert('Perdiste 2 de 3');
}

else if(contador1 == 2){
  alert('Ganaste 2 de 3');
}
