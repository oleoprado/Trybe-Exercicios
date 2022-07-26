// crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];
const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

// console.log(reportBetter(estudantes));

/////// outra forma de resolver
const report = estudantes.map((estudante) => ({
  name: estudante.nome, 
  materia: estudante.materias.reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name
}));
// console.log(report);

// reduce com arr numbers
const arr = [10, 20, 20];

const acumuladorReduce = (acumulador, valorInicial) => acumulador + valorInicial;
// console.log(arr.reduce(acumuladorReduce, 0));
const teste = arr.reduce((acc, valorInicial) => acc + valorInicial);
// console.log(teste);

// reduce com arr obj
const pessoas = [
  {
    nome: 'Leonardo',
    idade: 31
  },
  {
    nome: 'Jonathan',
    idade: 35
  },
  {
    nome: 'Glauco',
    idade: 27
  },
  {
    nome: 'Gael',
    idade: 4
  },
  {
    nome: 'Giovanna',
    idade: 17
  },
]
const pessoasAgrupadas = pessoas.reduce((valorAcumulador, valorArray) => {
  const maiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
  valorAcumulador[maiorOuMenor].push(valorArray);

  return valorAcumulador;
}, {maiores: [], menores: []})
console.log(pessoasAgrupadas);