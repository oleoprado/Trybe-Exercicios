// 1 Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const teste = arrays.reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), []);
  return teste;
}
console.log(flatten());