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
let array = ['java', 'javascript', 'python', 'html', 'css', 'c'];
let maiorPalavra = array[0]; 
let menorPalavra = array[0]; 

for (let index = 0; index < array.length; index +=1) {
  if (array[index].length > maiorPalavra.length) {
    maiorPalavra = array[index];
  }
}
console.log("A maior palavra do array é: " + maiorPalavra);

for (let index2 = 0; index2 < array.length; index2 += 1) {
  if (array[index2].length < menorPalavra.length) {
    menorPalavra = array[index2];
  }
}
console.log("A menor palavra do array é: " + menorPalavra);

//4-escreva um algoritmo que retorne o maior número primo entre 2 e 50.
// let ehPrimo = [];
let maiorNumeroPrimo = 0;
for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  let ehPrimo = true;
  for (let divisorAtual = 2; divisorAtual < numeroAtual; divisorAtual += 1) {
    if (numeroAtual % divisorAtual === 0) {
      ehPrimo = false;
    }
  }
  
}