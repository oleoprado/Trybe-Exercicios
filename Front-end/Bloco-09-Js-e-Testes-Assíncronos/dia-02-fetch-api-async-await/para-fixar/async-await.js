// Temos duas maneiras de utilizar o async await, a primeira é mesclando com o .then() e o .catch():
// 1 - Usando o await , a fetchJoke espera o fetch terminar toda sua execução (até o último .then() ou .catch()) para só depois executar o console.log().
const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu errado :( \n${error}`);

//   console.log(result);
// }

// fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// 2 - A segunda é refatorando o .then() e o .catch() usando o try e o catch:
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.