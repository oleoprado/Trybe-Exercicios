/* 1 - 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals.*/

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    // console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    // console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

/* 2 - 🚀 Crie uma função que retorne um array em ordem crescente.

Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.*/

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}


console.log(`Os numeros ${sortOddsAndEvens()} se encontram ordenados de forma crescente`);

const ordenados = oddsAndEvens.sort((a, b) => a - b);
console.log(ordenados);
console.log(`Os numeros ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente`);

// PARTE 2

//1-Crie uma função que receba um número e retorne seu fatorial.

// const fatorial = (num) => {
//   let resultado = num;
//   for (let i = 1; i < num; i += 1 )
//   resultado *= i;
//   console.log(resultado);
// }
// fatorial(4);
                                          
const fatorial = (number) => number > 1 ? number * fatorial(number - 1) : 1;
console.log(fatorial(4));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra.

const maiorPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maior = frase[0];
  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i].length > maior.length ) {
      maior = palavras[i];
    }
  }
 console.log(maior);
}

maiorPalavra('abacaxi pindamonhangaba é uma cidade');

// 4 - 🚀 Crie duas funções JavaScript com as seguintes especificações:
//Função 1
const substituiX = (nome) => {
  const frase = 'Tryber x aqui!';
  const novaFrase = frase.replace('x', nome)
  
  return novaFrase;
}
const retornoFuncao1 = substituiX('Leonardo');

//função 2

const novastring =  (retornoFuncao1) => {
  const skills = ['Js', 'CSS', 'HTML'];
  let resultado = `${retornoFuncao1}
  Minhas três principais habilidades são:`;
  
  skills.forEach((skill) => {
    resultado = `${resultado} 
    - ${skill}`;
  });
  return resultado;
};

console.log(novastring(retornoFuncao1));

