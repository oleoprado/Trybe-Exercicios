/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const nomeEmail = (nomeCompleto) => {
  const funcionario = {
    Nome: nomeCompleto,
    Email: `${nomeCompleto.toLowerCase().replace(/ /g, '_')}@trybe.com`,
  }
  return funcionario;
}
const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(nomeEmail));

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*/



const checarNumeros = (numApostado, numSorteado) => numApostado === numSorteado;

const sorteio = (numApostado, checarNumeros) => {
  const numSorteado = Math.floor((Math.random() * 5) + 1);

  return checarNumeros(numApostado, numSorteado) ? `Parabéns você ganhou! O numero sorteado foi: ${numSorteado}` : `Tente novamente. O numero sorteado foi: ${numSorteado}`;
};
console.log(sorteio(2, checarNumeros));



