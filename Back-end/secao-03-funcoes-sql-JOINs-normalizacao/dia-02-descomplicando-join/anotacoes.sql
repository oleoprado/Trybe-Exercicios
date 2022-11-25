-- JOIN
JOIN --combina em um mesmo resultado registros de duas ou mais tabelas
-- tipos de JOIN p/ combinar duas ou mais tabelas:
INNER JOIN
LEFT JOIN
RIGHT JOIN

-- Quando uma tabela precisa ser combinada consigo mesma:
SELF JOIN

---------------------------------------------------------

INNER JOIN
--permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

---------------------------------------------------------
--Dicas sobre como escolher o tamanho do alias:

--Sua query é composta de poucas linhas? Então use apenas letras ou a primeira sílaba para representar a coluna. Por exemplo, “actor” se tornaria “A” ou “act”.

--Caso esteja montando JOINS com muitas linhas, é recomendado usar um alias mais descritivo para tornar a leitura e interpretação da query mais simples.

---------------------------------------------------------

-- LEFT JOIN e o RIGHT JOIN
-- Você precisa encontrar um conjunto de registros, mas não tem certeza se uma das colunas de referência envolvidas possui ou não essa informação. Para que você encontre registros nessa situação, podemos usar o LEFT JOIN ou RIGHT JOIN

-- DIFERENCAS ENTRE OS JOIN'S
LEFT JOIN: --quando utilizamos o LEFT JOIN, focamos a tabela da esquerda. São retornados todos os registros da tabela da esquerda e valores correspondentes da tabela da direita, caso existam. Valores que não possuem correspondentes são exibidos como NULL.

RIGHT JOIN: --quando utilizamos o RIGHT JOIN, focamos a tabela da direita. São retornados todos os registros da tabela da direita e valores correspondentes da tabela da esquerda, caso existam. Valores que não possuem correspondentes são exibidos como nulos.

INNER JOIN: --finalmente, temos o INNER JOIN, que foca em trazer somente os registros que possuem valores correspondentes em ambas as tabelas.

SELF JOIN --analisar informações concentradas em apenas uma tabela.

-- se quisermos buscar o nome das pessoas colaboradoras e das respectivas gerências (manager), podemos montar a seguinte query usando SELF JOIN:
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;