//OBJETOS E FOR IN
//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// console.log("Bem-vinda, " + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto
info.recorrente = 'Sim';
// console.log(info);

//3- Faça um for/in que mostre todas as chaves do objeto
for (let key in info) {
  // console.log(key);
}

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto

for (let key in info) {
  // console.log(info[key]);
}
//5-Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves),Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let keyMain in info) {
  if (keyMain === 'recorrente' && info[keyMain] === 'Sim' && info2[keyMain] === 'Sim') {
    console.log('Ambas recorrentes');
  } else {
    console.log(info[keyMain] + ' ' + info2[keyMain]);
  }
}

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

//7-Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes
leitor.livrosFavoritos.push({ titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco' });
// console.log(leitor.livrosFavoritos[1]);

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");

//FUNÇÕES
//1- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false
function verificaPalindromo(string) {
  if (string === string.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
verificaPalindromo('ovo');

//2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indiceMaior(array) {
  let indiceMaior = 0;
  for (let index in array) {
    if (array[indiceMaior] < array[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(indiceMaior([1, 2, 5, 10, 12, 234]))

//3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function verificaIndiceMenor(array) {
  let indiceMenor = 0;
  for (let index in array) {
    if (array[indiceMenor] > array[index]) {
      indiceMenor = index;
    }
  }
  return indiceMenor;
}

console.log(verificaIndiceMenor([10, 34, 25, 3, 98, 20]))

//4- Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function maiorQuantidadeCaracteres(array) {
  let maiorString = '';
  for (count of array) {
    if (count.length > maiorString.length) {
      maiorString = count;
    }
  }
  return maiorString;
}
console.log(maiorQuantidadeCaracteres(['a', 'ab','abcdsdsdasdasdsd', 'abc', 'abcd']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
function maisSeRepete (arrNum) {

}

//6-Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatoriaDo1ateNum (num) {
  let soma = 0;
  for (let i = 1; i <= num; i += 1) {
    soma += i;
  }
  return soma;
}
console.log(somatoriaDo1ateNum(5));