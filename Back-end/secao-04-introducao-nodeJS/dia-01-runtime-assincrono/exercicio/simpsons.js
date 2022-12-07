const { rejects } = require('assert');

const fs = require('fs').promises;

const getSimpsons = async () => {
  const data = await fs.readFile('simpsons.json', 'utf-8');
  return JSON.parse(data);
}

const readAndPrintCharacter = async () => {
  const character = await getSimpsons();
  
  character.map(personagem => console.log(`${personagem.id} - ${personagem.name}`));
}

const findCharacterId = async (id) => {
  const character = await getSimpsons();
  const simpsonEscolhido = character.find(simpson => Number(simpson.id) === id);
  
  if (!simpsonEscolhido) {
    throw new Error('id não encontrado')
  }
  return simpsonEscolhido;
}

const main = async () => {
  // readAndPrintCharacter();
  const simpson = await findCharacterId(9);
  console.log(simpson);
}
main();