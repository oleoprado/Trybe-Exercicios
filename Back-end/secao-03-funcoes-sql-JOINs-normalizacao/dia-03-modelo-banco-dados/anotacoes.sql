-- MODELAGEM E CRIACÃO DE UM BANCO DE DADOS

--Serei capaz de:
--Modelar um banco de dados;
--Identificar entidades, atributos e relacionamentos;
--Construir um diagrama entidade-relacionamento (diagrama ER);
--Criar um banco de dados;
--Criar e modelar tabelas com base em um diagrama ER;
--Normalizar o banco de dados seguindo as Formas Normais.

-----------------------------------------------------------------------------

-- Database Design - Como modelar um banco de dados:

--1 Identificar as entidades, atributos e relacionamentos com base na descrição do problema: Por exemplo, a entidade álbum possui os atributos título e preço e se relaciona com a entidade artista.

--2 Construir um diagrama entidade-relacionamento para representar as entidades encontradas no passo 1: O diagrama serve como um guia para que você possa visualizar as entidades (tabelas) que irão se relacionar.

--3 Criar um banco de dados para conter suas tabelas: Após analisar e criar um diagrama de como o seu banco de dados vai ser estruturado, você pode dar início a criação dele.

--4 Criar e relacionar tabelas tendo o diagrama do passo 2 como base: Após criar seu banco de dados, você pode começar a criar e relacionar as tabelas de acordo com o diagrama.

-- 1) Identificando entidades, atributos e relacionamentos:
--ENTIDADES
-- São uma representação de algo do mundo real dentro do banco de dados e que normalmente englobam toda uma ideia. São armazenadas em formato de tabelas em um banco de dados.

--ATRIBUTOS
--Um atributo é tudo aquilo que pode ser usado para descrever algo. Por exemplo, uma entidade pessoa pode ter nome, altura, peso e idade como atributos.

--RELACIONAMENTOS
--Os relacionamentos servem para representar como uma entidade deve estar ligada com outra(s) no banco de dados. Há três tipos de relacionamentos possíveis em um banco de dados, são eles:
  --Relacionamento Um para Um (1..1):
--uma linha da Tabela A deve possuir apenas uma linha correspondente na Tabela B e vice-versa

  --Relacionamento Um para Muitos ou Muitos para Um (1..N):
--Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na Tabela A pode ter várias linhas correspondentes na Tabela B, mas uma linha da Tabela B só pode possuir uma linha correspondente na Tabela A
--Ex: uma categoria pode estar ligada a vários livros, embora um livro deva possuir apenas uma categoria.

  --Relacionamento Muitos para Muitos (N..N):
--acontece quando uma linha na Tabela A pode possuir muitas linhas correspondentes na Tabela B e vice-versa
--film_actor possui actor_id e film_id, dessa forma, ela serve como uma tabela auxiliar, também chamada de tabela de junção que relaciona as tabelas actor e film. Esse tipo de relacionamento também pode ser chamado de um para muitos ligados por um tabela intermediária.

-----------------------------------------------------------------------------

-- 2)Montando um diagrama mais detalhado
--Para diagramas ER (entidade-relacionamento) mais detalhados, deve-se incluir o nome das tabelas, suas chaves primárias e estrangeiras, suas colunas e seus relacionamentos.

--Anota aí 📣: A ideia de um diagrama ER é prover uma representação gráfica para a estrutura de seu banco de dados, descrevendo suas entidades com seus atributos e como elas se relacionam. Essa visualização pode te ajudar tanto a criar e modelar seu banco de dados quanto a entender se sua modelagem precisa ser alterada ou se houve algum erro ao pensar na organização de suas entidades. Com esse diagrama você consegue pensar um pouco mais antes de começar a escrever as queries para criar as tabelas.

-----------------------------------------------------------------------------

-- 3) Criando um banco de dados para conter suas tabelas
CREATE DATABASE nome_do_banco_de_dados; -- Cria um banco de dados com o nome especificado.

CREATE SCHEMA nome_do_banco_de_dados; -- Sinônimo de CREATE DATABASE, também cria um banco de dados.

-- Verifica se o banco de dados ainda não existe.
CREATE DATABASE IF NOT EXISTS albuns; -- Essa verificação é comumente utilizada junto ao CREATE DATABASE para evitar
-- a tentativa de criar um banco de dados duplicado, o que ocasionaria um erro.
IF NOT EXISTS nome_do_banco_de_dados;

-- Lista todos os bancos de dados existentes.
SHOW DATABASES;

-- Define o banco de dados ativo para uso no momento.
USE nome_do_banco_de_dados;

--** TIPOS DE DADOS **
-- Booleanos:
-- 1(true) ou 0(false) - default é NULL - Ex: tinyint(1)

-- Caracteres:
-- Char(5) - permite inserir até uma qtd de caracteres informado entre ()
-- Varchar(10) - permite inserir até uma qtd de caracteres informado entre (), porem só ocupa o espaço que for preenchido, ao contrario do char() que ocupara todo o espaço

-- Numeros(inteiros):
-- Tinyint
-- Smallint
-- Mediumint
-- Int
-- Bigint

-- Numeros exatos com precisao decimal:
-- Decimal - permite definir qtd max de numeros e sua precisao.Ex: DECIMAL(5, 2) = 199.99
-- Float/Real - precisão de uma casa decimal. Ex: 10.9
-- Double - precisao de duas casas decimais. Ex: 49.90

-- Temporais:
-- DATE - Armazena no padrão YYYY-MM-DD
-- TIME - Armazena no padrão HH:MM:SS
-- YEAR - Armazena somente o ano entre 1901 e 2155;
-- DATETIME - YYYY-MM-DD HH:MM:SS - faixa de valores 1000-01-01 00:00:00 até 9999-12-31 23:59:59
-- TIMESTAMP - igual datetime, mas pode operar com base em fuso horario definido pelo servidor

----**** PRIMARY KEY e FOREIGN KEY ****----

--PRIMARY KEY
-- é uma coluna ou grupo de colunas usadas para identificar uma linha em uma tabela.É um identificador unico da tabela
--Ex de como inserir uma PRIMARY KEY
CREATE TABLE nome_tabela (
  nome_coluna tipo_de_dados PRIMARY KEY
  nome_coluna tipo_de_dados
)

--FOREIGN KEY
-- é uma coluna ou grupo de colunas em uma tabela que identifica unicamente uma linha em outra tabela

-- PRIMARY KEY COMPOSTA
-- A chave composta é aquela criada com duas ou mais colunas e, desta forma, passa a utilizar a junção desses dados para formar um valor único e assim bloquear a duplicidade
  DROP SCHEMA IF EXISTS brasil;
  CREATE SCHEMA brasil;
  USE brasil;

  CREATE TABLE cidades(
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(10) NOT NULL,
    populacao INTEGER,
    CONSTRAINT PRIMARY KEY(cidade, estado)
  );

  INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
    ('Rio Claro','RJ',17216);
---

-- Há muitas formas de grafia existentes, mas para manter uma padronização e seguirmos a boa prática adotaremos a notação em "snake_case"
-- para construirmos nossos bancos de dados e tabelas.

DROP SCHEMA IF EXISTS trybe_flix;
CREATE SCHEMA trybe_flix;
USE trybe_flix;

-- Primeiro criamos a tabela actor
CREATE TABLE actor(
    actor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E a tabela film
CREATE TABLE film(
    film_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- E por fim, a tabela film_actor com a relação N:N

CREATE TABLE film_actor(
  actor_id INTEGER,
  film_id INTEGER,
  CONSTRAINT PRIMARY KEY(actor_id, film_id),
    FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
    FOREIGN KEY (film_id) REFERENCES film (film_id)
);

-----------------------------------------------------------------------------

-- COMO CRIAR TABELA no MySQL

--Sintaxe:
CREATE TABLE nome_tabela (
  nome_coluna1 tipo CONSTRAINT, --não necessariamente uma coluna precisa ter constraint(restrições)
  nome_coluna2 tipo CONSTRAINT,
  nome_coluna3 tipo CONSTRAINT,
) ENGINE='nome_engine' --mecanismo de armazenamento do sql que permite utilizar FOREING KEY (default: ENGINE=InnoDB)

--Ex:
CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco decimal(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
    FOREIGN KEY (album_id) REFERENCES estilomusical(estilo_id)
) ENGINE=InnoDB;

CREATE TABLE estilomusical(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

-----------------------------------------------------------------------------

-- NORMALIZAÇÃO
-- Normalização é uma técnica para organizar tabelas relacionadas no banco de dados com o objetivo de reduzir a redundância de dados.

-- Problemas da redundância de dados:
  -- tabelas ocupando espaços desnecessários,
  -- anomalia de inserção,
  -- anomalia de atualização,
  -- anomalia de exclusão

-- Com a normalização nos temos:
  -- Separação de dados relacionados em suas próprias tabelas;
  -- Integridade de dados;
  -- Redução de espaço gasto no banco de dados.


-- FORMAS DE NORMALIZAÇÃO:

  -- 1ª Forma Normal:

    --As tabelas devem ser escaláveis(preparadas p/ grande qtd de dados);
    --As tavelas devem ser extensíveis(mudanças não devem quebrar a integridade dos dados);
  -- REGRAS:
    --Colunas devem possuir apenas um valor;
    --Valores em uma coluna devem ser do mesmo tipo de dados;
    --Cada coluna deve possuir um nome único;
    --A ordem dos dados registrados em uma tabela não deve afetar a integridade dos dados.

  -- 2ª Forma Normal:

    --A tabela deve estar na 1ª Forma Normal;
    --A tabela não deve possuir dependências parciais.
--obs: Uma dependência parcial pode ser considerada como qualquer coluna que não depende exclusivamente da chave primária da tabela para existir

--A coluna curso pode ser considerada uma dependência parcial, pois é possível mover os valores dessa coluna para uma outra tabela exclusiva para cursos. Os dados dessa tabela exclusiva para cursos podem existir independente de existir uma pessoa estudante vinculada a esse curso ou não. Dessa forma, depois de normalizar, teríamos duas tabelas: Cursos(id, nome) e Pessoas_Estudadentes(id, nome, data_matricula, curso_id)

--*** Lembre-se que a função da normalização não é necessariamente reduzir o número de colunas mas remover redundâncias e possíveis anomalias de inclusão, alteração ou remoção de dados.

  -- 3ª Forma Normal:

    --A tabela deve estar na 1ª e 2ª Formas Normais;
    --A tabela não deve conter atributos (colunas) que não sejam dependentes exclusivamente da PK (chave primária).