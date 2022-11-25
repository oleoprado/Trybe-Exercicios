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