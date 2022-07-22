const listaDeAprovados = [
  'leonardo@gmail.com',
  'augustinho.rprado@gmail.com',
  'juliana.dujak@gmail.com',
  'trybemsc@trybe.com'
]

const enviarEmail = (email) => {
  console.log(`Email para ${email} enviado com sucesso!`);
}

listaDeAprovados.forEach((item, index, array) => {
  enviarEmail(item);
  console.log(`sua posição no processo foi: ${index}`);
  console.log(`a quantidade de pessoas no processo seletivo é: ${array.length}`);
});

////////////////////////////////////////////
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multiplicaPor2 = (elemento) => {
  console.log(`${elemento} * 2: ${elemento * 2}`);
}
numbers.forEach(multiplicaPor2);

//////////////////////////////////////////
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names);
////////////////////////////////////////
// PARA FIXAR

// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);
