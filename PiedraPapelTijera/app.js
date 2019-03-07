char = prompt('¿Que caracter quieres?','*')
while (char.length !== 1) {
  char = prompt('Introduce un solo caracter','*')
}

minimo = 0;
maximo = 0;

var numero = Math.floor(Math.random()*(maximo-minimo +1)+ minimo);
console.log('elegiste' + char)
