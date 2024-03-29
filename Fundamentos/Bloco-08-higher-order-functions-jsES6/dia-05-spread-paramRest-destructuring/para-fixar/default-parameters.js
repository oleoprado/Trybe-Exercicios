//  Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico. Assim, o default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário.
// const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting(); // // Welcome usuário!
//PARA-FIXAR
//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  return number * value; 
};

console.log(multiply(8));


/////////////////////////////////////////////////////////////
// esquenta projeto
const array = [-1,2,3,-4,5];
function invert(array) {
  const inverteValor = array.map((numero) => numero >= 0 ? numero *= -1 : Math.abs(numero));
  // array.map((number) => number * -1);
 return inverteValor ;
}
// console.log(invert(array));
///////////////////////////////////////////
const arr = [1];
function minMax(arr) {
  const minxMax = [Math.min(...arr), Math.max(...arr)];
  return minxMax
}
// console.log(minMax(arr))
/////////////////////////////////////////////
const list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

const {language, country} = list1;
function getFirstPython(list) {
  const first = list.reduce((acc, curr) => console.log(acc), '')
  return first;
}
// console.log(getFirstPython(list1));