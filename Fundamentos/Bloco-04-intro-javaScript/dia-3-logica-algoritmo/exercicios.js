//1- crie um algoritmo que retorne o fatorial de 10.
//da pra fazer desta forma
let fatorial = 10;
let resultado = fatorial;

for (let i = 9; i > 0; i -= 1) {
    resultado *= i;
}
console.log(resultado)
// ou desta forma
// let fatorial = 10;
// let resultado = fatorial;
// for (let i = 1; i < 10; i += 1) {
//     resultado *= i;
// }
// console.log(resultado)