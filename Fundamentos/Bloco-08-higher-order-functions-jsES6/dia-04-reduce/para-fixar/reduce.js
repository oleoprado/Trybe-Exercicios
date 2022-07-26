
// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
  // console.log(`valor atual é ${curr}`);
  // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
  // Iteração 1: valor do acc é 1 e o de curr é 32;
  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
  // Iteração 2: valor do acc é 33 e o de curr é 44;
  // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
  // Iteração 3: valor do acc é 77 e o de curr é 2;
  // Iteração 4: valor do acc é 79 e o de curr é 3;
  // Valor final de `acc`é 82 e `curr` para no 3.


  // return acc + curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.

// });

// console.log(`O resultado final é ${iteracoesDoReduce}`);
// por fim, esse console.log imprime o retorno final da nossa função, 

// const numbers = [1, 32, 44, 2, 3];

// const totalSum = numbers.reduce((acc, curr) => {
  // console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
  // Iteração 1: valor do acc é 30 e o de curr é 1
  // Iteração 2:valor do acc é 31 e o de curr é 32
  // Iteração 3: valor do acc é 63 e o de curr é 44
  // Iteração 4: valor do acc é 107 e o de curr é 2
  // Iteração 5: valor do acc é 107 e o de curr é 3
  // Valor final de `acc`é 112 e `curr` para no 3


  // return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
    // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.
////////////////////////////////////////////////////

// Organizando para simplificar
// Veja também que ao invés de passar a lógica direto dentro da callback do reduce, você pode criar uma função externa e chamá-la como sendo o parâmetro callback:
// const numbers = [1, 32, 44, 2, 3];

// const sumNumbers =  (acc, curr) => acc + curr;

// const totalSum = numbers.reduce(sumNumbers, 30);

// console.log(totalSum); //112

////////////////////////////////////////////////////
// Outros exemplos de uso do reduce
// serão comparados valores para buscar o maior valor em um array
// const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

////////////////////////////////////////////////////
// faça uma função que some todos os numeros pares do array
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// usando filter e reduce
/* const getEven = (number) => number % 2 === 0;
const sumPair = (accumulator, number) => accumulator + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair);

console.log(sumNumbers(numbers)); */

// usando apenas reduce
const sumPair = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); 