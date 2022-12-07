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

// ESTRUTURA DE PASTA
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
