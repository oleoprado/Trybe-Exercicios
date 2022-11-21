-- Apagar um banco de dados
Selecionar o banco com botao direito -> Drop Schema -> Drop Now

-- INSERT
Adiciona dados em tabelas;

Backticks ou crase (``): são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.

Aspas simples (''): devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos Sistemas de Gerenciamento de Banco de Dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

-- Sintaxe Insert
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

-- Inserindo várias linhas de uma vez
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

-- Ignorando linhas existentes
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;
-- IMPORTANTE: Lembre-se de que o INSERT IGNORE vai pular os outros erros silenciosamente também.

-- Inserindo com auto incremento
a coluna que possui auto_increment é omitida no INSERT, uma vez que o valor já é gerado automaticamente:
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

-- INSERT SELECT (Inserindo dados de uma outra tabela)
INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;

-- UPDATE - alterando dados
-- permite alterar valores de uma tabela com base em alguma condição.
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- UPDATE e o DELETE no MySQL Server é que, por padrão, existe uma configuração chamada safe updates mode que só vai te permitir executá-los caso eles incluam quais IDs devem ser modificados
-- uma janela de query dentro do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos de UPDATE ou DELETE:
SET SQL_SAFE_UPDATES = 0;

-- Alterando mais de uma coluna ao mesmo tempo
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

-- UPDATE em massa
-- Por questões de performance, para que apenas uma solicitação de query seja enviada ao servidor, podemos fazer uma atualização em massa.
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

--- UPDATE de forma sequencial
--Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem em que forem encontrados.

--Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados. Caso contrário, todos os resultados que satisfizerem a condição serão atualizados.

--Veja a sintaxe abaixo. Lembre-se de que os valores entre colchetes ([]) são opcionais:
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- --SAFE-UPDATES
--safe-updates (ou --i-am-a-dummy, sim, é uma propriedade real do MySQL) pode ser uma configuração segura para utilizar operadores de alteração de dados. Ele é útil para casos nos quais você tenha emitido um comando UPDATE ou DELETE, mas esquecido de incluir WHERE para indicar quais linhas devem ser modificadas, evitando que a query atualize ou exclua todas as linhas da tabela.

--safe-updates exige que você inclua um valor chave (key value), por exemplo os ids (lembrando que os valores da coluna id de uma tabela são do tipo KEY) dos itens selecionados, para executar o UPDATE ou o DELETE

-- A opção --safe-updates exige que o mysql execute a seguinte instrução ao se conectar ao servidor:
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;

--sql_select_limit=1000: limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT.

--max_join_size=1.000.000: faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

-- desabilitar o --safe-updates utilizando o comando SET:
SET SQL_SAFE_UPDATES = 0;

-- DELETE - removendo dados de uma tabela
-- excluir dados de forma básica, temos a seguinte sintaxe:
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- DELETE VS TRUNCATE
--função principal e única do TRUNCATE é de limpar (excluir todos os registros) de uma tabela, não sendo possível especificar o WHERE. Por isso, o TRUNCATE só pode ser usado nesse cenário.
TRUNCATE banco_de_dados.tabela;
--Caso precise excluir condicionalmente, usando regras e especificações, use sempre o comando DELETE juntamente com o WHERE.