-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    movies m
        INNER JOIN
    box_office b ON b.movie_id = m.id;
-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    movies m
        INNER JOIN
    box_office b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
-----------------------------------------------------------
SELECT
    m.title,
    ( b.international_sales) AS "Vendas internacionais"
FROM
    movies m
        INNER JOIN
    box_office b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
  m.title,
  b.rating
FROM
	pixar.box_office AS b
INNER JOIN
	pixar.movies AS m
ON b.movie_id = m.id
ORDER BY rating DESC;
-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM 
	pixar.theater AS t
LEFT JOIN
	pixar.movies AS m ON t.id = m.theater_id
ORDER BY t.name;
-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM 
	pixar.theater AS t
RIGHT JOIN
	pixar.movies AS m ON t.id = m.theater_id
ORDER BY t.name;
--🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM movies m
INNER JOIN box_office b
ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;
-- Ou
SELECT 
    th.name,
    th.location,
    mo.title,
    mo.director,
    mo.year,
    mo.length_minutes
 FROM 
    movies as mo
INNER JOIN
    theater as th ON mo.theater_id = th.id
INNER JOIN box_office as bo ON bo.movie_id = mo.id
WHERE bo.rating > 8.0