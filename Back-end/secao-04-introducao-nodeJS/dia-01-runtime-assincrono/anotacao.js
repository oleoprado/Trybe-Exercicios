SISTEMA DE MODULOS

/*
Anota aí 🖊: um módulo em Node.js é um “pedaço de código”, o qual pode ser organizado em um ou mais arquivos, que possui escopo próprio. Ou seja, suas variáveis, funções, classes e afins só estão disponíveis nos arquivos que fazem parte daquele módul

um módulo é uma funcionalidade, ou um conjunto de funcionalidades, que se encontram isoladas do restante do código. O Node.js possui três tipos de módulos: internos, locais e de terceiros.

MODULOS INTERNOS:

Os módulos internos (ou core modules) são inclusos no Node.js e instalados junto com ele quando baixamos o runtime. Alguns exemplos de core modules são:

fs: fornece uma API para interagir com o sistema de arquivos de forma geral;

url: provê utilitários para ler e manipular URLs;

util: oferece ferramentas e funcionalidades comumente úteis a pessoas programadoras.

os: oferece ferramentas e funcionalidades relacionadas ao sistema operacional.


MODULOS LOCAIS:

são aqueles definidos juntamente à nossa aplicação. Eles representam as funcionalidades ou partes do nosso programa que foram separados em arquivos diferentes. Podem ser publicados no NPM, para que outras pessoas possam baixá-los e utilizá-los


MODULOS DE TERCEIROS

Os módulos de terceiros são aqueles criados por outras pessoas desenvolvedoras e disponibilizados para uso por meio do npm.
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

MANEIRAS DE IMPORTAR E EXPORTAR MODULOS

/*
Quando queremos utilizar o conteúdo de um módulo ou pacote de outro arquivo no Node.js, precisamos importar esse módulo/pacote para o contexto atual no qual estamos.

Para isso, existem dois sistemas de módulos difundidos na comunidade JavaScript:

- Módulos ES6;

- Módulos CommonJS:
*/
// No CommonJS as palavras-chaves utilizadas para importação e exportação de módulos são:
require(); // importar
module.exports; // exportar

/////////////////////////////////////////////////////////////////////////////////////////////////////

EXPORTANDO MODULOS
//Para exportar algo no sistema CommonJS, utilizamos a variável global module.exports, atribuindo a ela o valor que desejamos exportar:
// brlValue.js
// const brl = 5.37;

module.exports = brl;
/////////////////////////////////////////////////////
// brlValue.js
const brls = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brls;

module.exports = usdToBrl;

// 💪Agora,vamos trazer isso para a prática!

// Imagine que estamos exportando uma função, de modo que podemos utilizá-la para converter um valor em dólares para outro valor,neste caso em reais.
// index.js
const convert = require('./brlValue');

const usd = 10;
const brl = convert(usd);

console.log(brl) // 53.7


/////////////////////////////////////////////////////////////////////////////////////////////////////
EXPORTANDO + DE UMA ENTIDADE(variaveis, funcoes, etc)
// brlValue.js
// const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

module.exports = {
  brl,
  usdToBrl,
};

// importarmos o módulo receberemos o seguinte objeto como resposta:
// index.js
const brlValue = require('./brlValue');

console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7

// Como estamos lidando com um objeto, podemos utilizar object destructuring para transformar as propriedades do objeto importado em constantes no escopo global:
const { brl, usdToBrl } = require('./brlValue');

console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7


/////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTANDO MODULOS

// MODULOS LOCAIS
// importar um módulo local, precisamos passar para o require o caminho do módulo, seguindo a mesma assinatura.
require('./meuModulo')

//podemos importar uma pasta. Isso é útil, pois muitas vezes um módulo está dividido em vários arquivos, porém, desejamos importar todas as suas funcionalidades de uma única vez. Nesse caso, a pasta precisa conter um arquivo chamado index.js, o qual importa cada um dos arquivos do módulo e os exporta da forma mais conveniente.
//Por exemplo:

// meuModulo/funcionalidade-1.js
module.exports = function () {
  console.log('funcionalidade1');
}

// meuModulo/funcionalidade-2.js
module.exports = function () {
  console.log('funcionalidade2');
}

// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };

//Para importarmos e utilizarmos o módulo meuModulo, basta passar o caminho da pasta como argumento para a função require, desse modo:
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();


//MODULOS INTERNOS
//devemos passar o nome do pacote como parâmetro para a função require. Por exemplo, require('fs') importa o pacote fs, responsável pelo sistema de arquivos.

const fs = require('fs');
const { NOTIMP } = require('dns')

fs.readFileSync('./meuArquivo.txt');

//MODULOS DE TERCEIROS
// Módulos de terceiros são importados da mesma forma que os módulos internos: passando seu nome como parâmetro para a função require. A diferença é que, como esses módulos não são nativos do Node.js, precisamos primeiro instalá-los na pasta do projeto em que queremos utilizá-los.

//Anota aí 🖊: O registro oficial do Node.js, em que milhares de pacotes estão disponíveis para serem instalados, é o npm. Além disso, npm também é o nome da ferramenta de linha de comando (CLI - command line interface), responsável por baixar e instalar esses pacotes. O CLI npm é instalado juntamente com o Node.js.

/////////////////////////////////////////////////////////////////////////////////////////////////////

NPM

//O NPM (sigla para Node Package Manager) é o repositório oficial para publicação de pacotes Node.js.

//Anota aí 🖊: Um pacote é um conjunto de arquivos que exportam um ou mais módulos Node. Nem todo pacote Node é uma biblioteca, visto que uma API desenvolvida em Node também tem um pacote.

// NPM INIT
npm init // Permite criar de forma rápida e simplificada de um novo pacote Node.js na pasta onde é executado, cria um arquivo chamado package.json com as respostas das perguntas realizadas e mais alguns campos de metadados.

npm init -y // cria com informações padrão sobre o pacote(nome, versao, nome dos autores,etc)

// Para o Node.js, qualquer pasta contendo um arquivo package.json válido é um pacote.

// NPM RUN
//O comando run faz com que o npm execute um determinado script configurado no package.json. Scripts são “atalhos” que podemos definir para executar determinadas tarefas relacionadas ao pacote atual.

//Por exemplo, para ter um script chamado lint que execute a ferramenta de linter que usamos aqui na Trybe, o ESLint, nossa chave scripts fica assim:
{
  "scripts": {
    "lint": "eslint ."
  }
}

// NPM START
//O comando npm start age como um “atalho” para o comando npm run start, uma vez que sua função é executar o script start definido no package.json.

//Como convenção, todo pacote que pode ser executado pelo terminal (como CLIs, APIs e afins) deve ter um script start com o comando necessário para executar a aplicação principal daquele pacote.

// Por exemplo: se tivermos um pacote que calcula o IMC (Índice de Massa Corporal) de uma pessoa cujo código está no arquivo imc.js, é comum criarmos o seguinte script:
{
  // ...
  "scripts": {
    "start": "node imc.js"
  }
  // ...
}

// NPM INSTALL
//é o responsável por baixar e instalar pacotes Node.js do NPM para o nosso pacote.Vamos descobrir algumas formas de usá-lo:

npm install <nome do pacote>// baixa o pacote do registro do NPM e o adiciona ao objeto dependencies do package.json;

npm install -D <nome do pacote>// baixa o pacote do registro do NPM, porém o adiciona ao objeto devDependencies do package.json, indicando que o pacote em questão não é necessário para executar a aplicação. Ele é necessário para desenvolvimento, ou seja, para alterar o código daquela aplicação. Isso é muito útil ao colocar a aplicação no ar, pois pacotes marcados como devDependencies podem ser ignorados, já que vamos apenas executar a aplicação, e não modificá-la.

npm install // baixa e instala todos os pacotes listados nos objetos de dependencies e devDependencies do package.json. Sempre deve ser executado ao clonar o repositório de um pacote para garantir que todas as dependências desse pacote estão instaladas.

/////////////////////////////////////////////////////////////////////////////////////////////////////

FLUXO ASSINCRONO

//Relembrando🧠: Assim como no front-end, as operações assíncronas são essenciais para as rotinas do back-end. Essas operações permitem que tarefas independentes sejam executadas em segundo plano, sem que o fluxo de execução aguarde pela finalização dessas tarefas.

//Existem duas formas principais para implementarmos código assíncrono em JavaScript, usando Callbacks e Promises.

// -As Callbacks fornecem uma interface com a qual você pode dizer: “e quando terminar de fazer isso, faça aquilo”.

// -As Promises funcionam do mesmo jeito: uma promessa/função é criada e, dentro dela, existe um código/ação a ser executado. Se o código é executado sem nenhum problema, a Promise é resolvida por meio da função resolve; se algo de errado acontecer durante a execução, a Promise é rejeitada por meio da função reject.

//Tratando erros de forma sincrona
function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}


//Tratando erros de forma assincrona
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));


// FUNCOES ASYNC / AWAIT

// Uma função async retorna uma promise, tal como o exemplo abaixo:
function dividirNumeros(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) 
      reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;
    resolve(resultado)
  });

  return promise;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

LEITURA E ESCRITA DE ARQUIVOS

//A leitura e escrita de arquivos é uma rotina muito realizada nas operações de back-end. Você pode, por exemplo:

// - armazenar os logs da sua aplicação;
// - ler arquivos de configurações para ações específicas;
// - exportar dados em um arquivo CSV.

// LENDO ARQUIVOS COM METODOS SINCRONOS

fs.readFileSync 
/*
 - sincrono,
 - não tem a melhor performace,
 - não usa callback nem promise,
*/

fs.readFile
/*
- Assincrono,
- Mais performático que o readFileSync,
- Usa callback
*/

fs.promises.readFile
/*
- Assincrono,
- Mais performático que os outros dois,
- Usa async/await ou then/catch
*/


// LENDO ARQUIVOS COM METODOS ASSINCRONOS
//O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile. Esse método possui diferentes formas de retornar a leitura de um arquivo. Neste caso, iremos utilizar o retorno de uma Promise que deve deixar nosso código muito mais legível.

//Observação: Para utilizar as operações assíncronas do fs, precisamos alterar a importação do módulo fs para ('fs').promises. Dessa forma, poderemos chamar as funções assíncronas para leitura e escrita de arquivos que retornarão Promises.

const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

//ESCREVENDO DADOS EM ARQUIVOS
//Assim como o módulo ('fs').promises disponibiliza o método readFile para a leitura, há também o método writeFile para a escrita.
const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

//Anota aí 🖊: No writeFile, assim como ocorre no readFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro (flag) opcional em seus métodos.

// A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.

// Observação: Se o arquivo não existir, ele é criado. Caso contrário, é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista.