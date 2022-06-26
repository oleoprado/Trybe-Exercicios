//1- crie um algoritmo que retorne o fatorial de 10.
//da pra fazer desta forma
let fatorial = 10;
let resultado = fatorial;

for (let index = fatorial -1; index > 0; index -= 1) {
  resultado *= index;
}
console.log(resultado)

//2-desenvolva um algoritmo que é capaz de inverter uma palavra
let word = 'paralelepipedo';
let invertWord = "";

for (let i = word.length -1; i >= 0; i -= 1) {
  invertWord += word[i];
}
console.log(invertWord);

//3-Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0]; 
let menorPalavra = array[0]; 

for (let index = 0; index < array.length; index +=1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}

console.log(maiorPalavra);