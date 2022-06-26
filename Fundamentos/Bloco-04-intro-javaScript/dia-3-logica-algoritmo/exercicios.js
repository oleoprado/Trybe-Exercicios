//1- crie um algoritmo que retorne o fatorial de 10.
//da pra fazer desta forma
let fatorial = 10;
let resultado = fatorial;

for (let index = fatorial -1; index > 0; index -= 1) {
  resultado *= index;
}
console.log(resultado)
