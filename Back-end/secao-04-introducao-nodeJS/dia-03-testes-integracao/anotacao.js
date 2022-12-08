TIPOS DE TESTE

// - 👉 Testes unitários: consideram um escopo limitado a um pequeno fragmento do seu código com interação mínima entre recursos externos.
// ex: 
// O motor precisa ser testado para saber se ele tem potência e torque; já os pneus são testados para saber se têm boa aderência no asfalto. Além disso, testamos o assento do motorista para saber se é confortável e ergonômico e também o volante para saber se é fácil manusear e esterçar.

// - 👉 Testes de integração: presumem a junção de múltiplos escopos (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles.
// ex:
// Voltando ao exemplo do carro, agora nos testes de integração, ao acelerar testamos se o motor permanece em uma velocidade constante e se, ao esterçar o volante, os pneus dianteiros são orientados corretamente para a direção desejada. Além disso, testamos se, ao se acomodar no assento da pessoa motorista, é fácil manusear o volante e o câmbio.

// - 👉 Testes de Ponta-a-ponta: também chamados de Fim-a-fim (End-to-End; E2E), pressupõem um fluxo de interação completo com a aplicação, de uma ponta a outra.
// De olho na dica 👀: Esse teste é o mais completo, pois necessita que todos os demais testes tenham sido desenvolvidos.
// ex:
// Ainda no exemplo do carro, no teste Ponta-a-Ponta (PaP) podemos fazer um test-drive de impacto para avaliar todos os aspectos, realizando, por exemplo, uma corrida com vários carros em um circuito.

////////////////////////////////////////////////////////////////////////////////////////////////////////

TESTES AUTOMATIZADOS

MOCHA

// O mocha é um framework de testes para JS, isso significa que ele nos ajuda a arquitetar os nossos testes fornecendo a estrutura e interface para escrevermos

// Utilizaremos a flag -D. Apesar de essenciais durante o desenvolvimento, esses módulos (ferramentas) não serão utilizados para executar a nossa aplicação quando ela for publicada.

// INSTALAR MOCHA
// npm install -D mocha@10.0 chai@4.3

// Feita a instalação, já podemos importar o mocha e o chai em um arquivo .js e escrever nossos testes.

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    //
  });
});

// Perceba que o describe aceita dois parâmetros:(I) o primeiro é uma string, onde podemos passar a descrição, (II) o segundo é uma função para executar o cenário de teste.

// Outro ponto de atenção é, que não é necessário importar o mocha em nosso arquivo, pois suas palavras reservadas serão interpretadas quando executarmos os testes,

// De olho na dica 👀: Veja que usamos a sintaxe function ao invés de arrow functions. Essa sintaxe é uma recomendação da própria documentação do mocha.


AFERINDO TESTES COM O CHAI

// O chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar validando se o resultado condiz com o esperado.

// Anota aí 🖊: Para de fato testar nossa função, precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos. Essa validação é o que chamamos de assertion, “asserção” ou, em alguns casos, “afirmação”.

// ⚠️ Aviso: Usaremos a interface expect do chai em nossos exemplos, que significa de fato o que é esperado para determinada variável:
const { expect } = require('chai');
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovação');

// No código acima, estamos chamando nossa função. Logo em seguida, afirmamos que seu retorno armazenado na constante resposta, deve ser igual (equals) a reprovação.

// Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético.
// Por exemplo, o to e o be, que nos permitem escrever nossa assertion da seguinte maneira:
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação"', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });
});

// **** COLOCAR NO PACKAGE.JSON O SCRIPT "test": "mocha tests(dir)/**(dentro desse dir vai ter varios dir)/*.test.js --exit" *******

////////////////////////////////////////////////////////////////////////////////////////////////////////

CONTRATOS DE APIs

// Sempre que consumimos ou fornecemos um serviço, como por exemplo uma API REST, precisamos ter os comportamentos predefinidos. Esses comportamentos são definidos de acordo com as regras de entrada e saída de dados da API.

// Anota aí 🖊: Em uma API, o conceito definido por essas regras é chamado de contrato. O contrato define aquilo que foi previamente acordado, ou seja, como a API deverá se comportar em um determinado cenário.

// Para ficar ainda mais nítido, vamos utilizar novamente o endpoint GET /users/:userId. Podemos dizer que o contrato dele é: quando a pessoa usuária existe, retornar a seguinte resposta:
// - Código HTTP: 200 - OK;
// - Body:

// A API Cacau Trybe será composta por três endpoints, representados pelos seguintes contratos:

👉 GET /chocolates

// - Objetivo: Retornar uma lista com todos os chocolates cadastrados.
// - Código HTTP: 200 - OK;
// - Body (exemplo):
[
  { "id": 1, "name": "Mint Intense", "brandId": 1 },
  { "id": 2, "name": "White Coconut", "brandId": 1 },
  { "id": 3, "name": "Mon Chéri", "brandId": 2 },
  { "id": 4, "name": "Mounds", "brandId": 3 }
]

👉 GET /chocolates/:id

// - Objetivo: Buscar um chocolate específico pelo ID.
// - Código HTTP: 200 - OK;
// - Body (exemplo):
[
  {
    "id": 4,
    "name": "Mounds",
    "brandId": 3
  }
]

👉 GET /chocolates/brand/:brandId

// - Objetivo: Buscar uma lista de chocolates pelo ID (brandId) da marca.
// - Código HTTP: 200 - OK;
// - Body (exemplo):
[
  {
      "id": 1,
      "name": "Mint Intense",
      "brandId": 1
  },
  {
      "id": 2,
      "name": "White Coconut",
      "brandId": 1
  }
]

////////////////////////////////////////////////////////////////////////////////////////////////////////

ESTRUTURA DE PASTA

.
├── src
├── tests/
│   └── integration/
│       └── chocolates.test.js
└── package.json

CONFIGURAR SCRIPT DE TESTE
//package.json
"scripts": {
  "test": "mocha tests/**/*.test.js --exit"
},

// ⚠️ Aviso: Para nos ajudar com esse desafio, utilizaremos o plugin Chai HTTP! Com ele poderemos simular uma request a nossa API sem inicializá-la manualmente.

////////////////////////////////////////////////////////////////////////////////////////////////////////

DUBLES DE TESTE

// Para evitar de alterar os dados reais, criamos dubles dos nossos dados para realizar nossos testes

// ⚠️ Aviso: Vale ressaltar que o dublê de teste não se restringe a funções específicas, como a leitura com o fs. O que precisamos ter em mente, ao definir um dublê, é o motivo pelo qual estamos isolando essa função.

// ferramenta Sinon, a qual fornece funções para diversos tipos dos Test Doubles.
// npm install -D sinon@14.0

stub // Stubs são objetos que podemos utilizar para simular interações com dependências externas ao que estamos testando de fato.

// Anota aí 🖊: A função restore() desempenha um papel muito importante quando utilizamos stubs, pois é ela que vai garantir que o stub de um teste não seja replicado para os testes seguintes.