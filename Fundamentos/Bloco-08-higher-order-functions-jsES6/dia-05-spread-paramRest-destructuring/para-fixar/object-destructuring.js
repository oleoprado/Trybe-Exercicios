// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};
// desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por :, segue a sintaxe: homeWorld: { name: planetName }. Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

// desestruturando o objeto:
// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

///////////////////////////////////////////////
// Feito a desestruturação, podemos utilizar o spread operator para juntar os valores do array workDays com os do array weekend, colocando-os em um novo array chamado weekdays.

const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
// console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
// console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
// console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//////////////////////////////////////////////////
// podemos trocar o nome da variável ao fazermos a desestruturação
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática
// console.log(student);

/////////////////////////////////////////////////////
// podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  // console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

////////////////////////////////////////////////////

// para-fixar
// 1 -Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const resultado = {...user, ...jobInfos};
// console.log(resultado);

///////////////////////////////////
// 2 Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const {name, age, nationality, profession, squad, squadInitials } = resultado;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);