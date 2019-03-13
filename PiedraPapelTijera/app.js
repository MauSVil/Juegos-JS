
var contador1 = 0;
var contador2 = 0;

while (contador2<2) {  // contador1<2 || contado2<2
  console.log('Usuario: ' + contador1);
  console.log('Computadora: ' + contador2);
    num = prompt('Escribe un numero: 1) Piedra, 2) Papel, 3) Tijeras');
    // while ((num !==1) || (num !== 2) || (num !== 3)){
      //   num = prompt('Escribe un numero: 1) Piedra, 2) Papel, 3) Tijeras')
      // }
      var minimo = 1;
      var maximo = 3;

      var numero = Math.floor(Math.random()*(maximo-minimo +1)+ minimo);

      if (numero == num) {
        alert('Es un empate')
      }

      else if (numero == 1 && num == 2){
        alert('Ganaste');
        contador1++;
      }
      else if (numero == 1 && num == 3){
        alert('Perdiste');
        contador2++;
      }
      else if (numero == 2 && num == 3){
        alert('Ganaste');
        contador1++;
      }
      else if (numero == 2 && num == 1){
        alert('Perdiste');
        contador2++;
      }
      else if(numero == 3 && num == 2){
        alert('Perdiste');
        contador2++;
      }
      else if (numero == 3 && num == 1){
        alert('Ganaste');
        contador1++;
      }
  }

console.log('Computadora: ' + contador2);
console.log('Usuario: ' + contador1);

if(contador2 == 2){
  alert('Perdiste 2 de 3');
}

else if(contador1 == 2){
  alert('Ganaste 2 de 3');
}
