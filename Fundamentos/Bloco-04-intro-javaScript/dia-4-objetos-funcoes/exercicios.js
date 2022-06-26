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
  console.log(info[key]);
}

//5-