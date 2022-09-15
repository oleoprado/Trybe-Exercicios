// App.test.js
// Primeira forma de mock do fetch

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. Isso é bem útil para que não haja interferência entre um teste e outro.
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {        // A constante joke cria um objeto similar ao que é retornado da API;
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch'); // espiona as chamadas à função fetch do objeto global. É por meio deste objeto global que conseguimos usar qualquer função do sistema. Ele é, no node, o equivalente ao objeto window do navegador

  // para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria
  global.fetch.mockResolvedValue({  // Primeiro retornamos um objeto que contém a função .json e  
    json: jest.fn().mockResolvedValue(joke), // dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
  });

  render(<App />);
  //  await findByText onde estamos dizendo ao nosso teste: espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.'); 

  expect(renderedJoke).toBeInTheDocument();

  // As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});

// Segunda forma de mock do fetch

// global.fetch = jest.fn(() => Promise.resolve({
//   json: () => Promise.resolve(joke)}));

// Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna sua piada.

// Terceira forma de mock do fetch

// global.fetch = jest.fn(async () => ({
//   json: async () => joke
// }));

describe('Testando exercicio para fixar 14.2', () => {
  it('ao renderizar a página, a primeira piada é exibida na tela e fetch chamado 1 vez', async () => {
    const joke1 = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(joke1),
    });
  
    render(<App />);
  
    expect(await screen.findByText(joke1.joke)).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
  })

  it('ao clicar no botão "New joke", uma nova piada é exibida na tela', async () => {
    const joke2 = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
    });
  
    render(<App />);
    const newJokeButton = screen.getByRole('button', { name: 'New joke' });
  
    expect(await screen.findByText(joke2.joke)).toBeInTheDocument();
    expect(global.fetch).toBeCalledTimes(1);
    
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(joke2),
     });

     userEvent.click(newJokeButton);
  })
})