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