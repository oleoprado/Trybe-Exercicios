APIs WEB

// APIs Web são ferramentas definitivas para conectar o front-end de uma aplicação aos dados que ela precisa salvar e receber. O padrão REST, rotas e aplicações C.R.U.D são partes do conhecimento de como se fazer uma boa API 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

MEU PRIMEIRO SERVIDOR NODE JS

//SERVIDORES
// servidores web são programas de computador que entregam algum tipo de informação ou página a quem os solicita através da internet. Toda vez que você abre seu navegador de internet e faz uma pesquisa no Google, é um servidor web da Google que te “responde”, trazendo o resultado da sua busca a partir das páginas e informações salvas no banco de dados da empresa.

// ALGUNS SERVIDORES WEB:
// -Apache HTTP Server;
// -NGINX;
// -Apache Tomcat;
// -Node.js; (Vamos focar neste).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

EXPRESS

// CONFIGURACOES INICIAIS EXPRESS
//É normal encontrarmos repositórios no GitHub com diferentes configurações, mas geralmente mantendo um comportamento comum:

// - na raiz do projeto ficam arquivos de configuração como: .gitignore, .eslintrc.json, package.json, docker-compose.yml e outros;
// - o código da aplicação fica em diretórios como: src, app, ou similar.

// .eslintignore: Usado para você dizer ao ESLint que ignore arquivos e diretórios específicos;

// .eslintrc.json: Usado para você sobrescrever regras do ESLint;

// Dentro do arquivo .eslintignore, vamos ignorar apenas os arquivos que estão dentro do diretório node_modules.

// dentro do arquivo .eslintrc.json, você vai escrever o seguinte trecho de código:
// .eslintrc.json
{
  "env": {
    "es2020": true
  },
  "extends": "trybe-backend",
    "rules": {
    "sonarjs/no-duplicate-string": ["error", 5]
  }
}

// função get() recebe 2 parametros:
// - 1 param: '/' - rota (ex: /login, /produtos, /pessoas, /etc)

// - 2 param: (req, res) => {} - espera uma callback, esta funcao pode receber de 2 a 4 parametros:
//  - req: Essa é a Request (ou requisição), é por meio dela que recebemos os dados (envio por query, params e body);
//  - res: Essa é a Response (ou resposta), é por meio dela que respondemos o que nos é solicitado.Podem ser respondidos de vários jeitos, tais como:
//  -Formato text/JSON, como o caso do res.json({ message: 'Olá Mundo!' });
//  -Formato text/HTML, como o caso do res.send('<h1>Olá Mundo!</h1>');
//  -Redirecionamentos, como o caso do res.redirect('https://www.betrybe.com/');
//  -Páginas completas ou partes dela, como o caso do res.render('index.html');
//  -Finalizando, como o caso do res.end();


// De olho na dica 👀: associe os status a constantes nomeadas, desse modo você facilita a leitura! const OK = 200, const INTERNAL_SERVER_ERROR = 500 e const NOT_FOUND = 404 são ótimos começos!

CRIANDO O SERVIDOR

// vá ao diretório src e crie mais dois arquivos: um chamado app.js e o outro server.js.
// src/app.js
const express = require('express'); // importar o express

const app = express();

module.exports = app;


// src/server.js
const app = require('./app');

app.listen(3001, () => console.log('server running on port 3001')); // um listen

// O start é provido pelo trecho app.listen... e dentro dele podemos passar até 2 parâmetros:
// - Primeiro parâmetro é o port (ou porta): Aqui passamos 3001, mas poderia ser qualquer número não utilizado acima de 1023;
// - Segundo parâmetro é uma função: Aqui passamos apenas um console.log exibindo uma mensagem “que estamos no ar”;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

ROTAS

// No contexto de Back-end, rotas representam as portas de entrada para a sua API.
// As ações do C.R.U.D.: Criar, ler, atualizar e remover. Pois é, nossa API terá quatro rotas.
// De olho na dica 👀: Rotas podem ser chamadas de caminhos, paths e endpoints de uma API.

// Anota aí 🖊: uma rota é a parte de uma URL que usamos para acessar uma API e fazer uma requisição a ela. Por meio da rota, na nossa aplicação, requisitaremos acesso, criação, leitura ou remoção de informações da nossa API de gerenciamento de times. 


STATUS CODE
// - 200: Que quer dizer ‘ok’;
// - 500: Que quer dizer erro no servidor;
// - 404: Este muitas pessoas já viram, ele quer dizer que a página não foi encontrada;


PROTOCOLO HTTP

// Anota aí 🖊: Protocolo é uma convenção que padroniza algo. Neste caso, o protocolo HTTP é uma convenção que padroniza a conexão, comunicação e transferência de dados, entre dois sistemas.

//EXEMPLO:
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (aqui vêm os 29769 bytes da página solicitada)

// A versão do protocolo (1.1 no nosso exemplo);

// O código do status que diz se a requisição foi um sucesso ou não. Nesse caso, deu certo, pois recebemos um código 200, acompanhado de uma pequena mensagem descritiva (OK, nesse caso);

// Os headers no mesmo esquema da requisição. No caso do exemplo acima, o Content-Type diz para o navegador o que ele precisa fazer. No caso do HTML, ele deve renderizar o documento na página;

// Um body ou corpo (da requisição), que envia dados quando necessário, sendo opcional. Por exemplo, caso você submeta um formulário registrando um pedido em uma loja virtual, no corpo da resposta pode ser retornado o número do pedido ou algo do tipo. Veremos exemplos logo mais!

//Note que tanto requisições quanto respostas podem ter headers e um body. No entanto, é importante não confundir uma coisa com a outra:

// - o body e os headers da requisição representam a informação que um cliente está enviando para o servidor;
// - o body e os headers da resposta representam a informação que o servidor está devolvendo para o cliente.

ENVIO DE REQUISICAO PARA O SERVIDOR

// Existem 3 formas de nós enviarmos dados para um servidor, duas pela própria URL e uma pelo corpo da requisição.

  GET 
// (Envio por consulta, ou req.query):
// Construção: /rota?variavel1=valor&variavel1=valor&variavelN=valor
// Explicação:
// - /rota é o caminho, por exemplo, /produtos, /pessoas, /pesquisa, …;
// - ? é o indicador que vamos passar dados em para a rota;
// - & é o separador que se usa quando queremos enviar muitos dados;
// - variavelN é uma chave identificadora, por exemplo, nome, frequenciaMinima, q, …;
// - valor é o valor da variável, por exemplo, nome=Tobias, frequenciaMinima=144, q=express, …;

  POST
  // (Envio por corpo ou req.body)
  // Isso se dá por duas questões:
  // A primeira é por segurança, que é a mais importante! Imagine sua senha ou código de segurança do seu cartão de crédito escritos na URL do seu computador e quem está perto de você podendo ler. 😱
  
  // O segundo motivo é pelo tamanho do que enviamos. Imagina que inviável enviar todo um cadastro de um formulário gigante pela URL! 😁