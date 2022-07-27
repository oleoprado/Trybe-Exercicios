// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const lowerCase = names.map((name) => name.toLowerCase()).toString().split('');
  const qtdDeA = lowerCase.reduce((acc, name) => name.includes('a') ? acc += 1 : acc, 0);

  return qtdDeA;
}
console.log(containsA());

