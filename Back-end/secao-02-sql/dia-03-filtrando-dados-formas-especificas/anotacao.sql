-- Operador
= -- igual
<> -- diferente de
> -- maior que
< -- menor que
>= -- maior que ou igual
<= -- menor que ou igual
AND -- operador logico E
OR -- operador logico ou
IS -- compara com valores booleanos (true, false, null)
NOT -- negação

-- PRECEDENCIA DOS OPERADORES 
Parenteses -> * e / -> - e + -> NOT -> AND -> OR

-- LIKE

-- O LIKE é usado para buscar por meio de uma sequência específica de caracteres
-- % - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres

-- _ - O underline representa um único caractere

SELECT * FROM sakila.film
WHERE title LIKE '%don'; --(procurar titulo que terminam com don)

SELECT * FROM sakila.film
WHERE title LIKE 'plu%'; --(procurar titulo que começa com plu)

SELECT * FROM sakila.film
WHERE title LIKE '%plu%'; --(se contain plu na coluna)

SELECT * FROM sakila.film
WHERE title LIKE 'p%r'; --(encontra qualquer resultado que contem p r)

SELECT * FROM sakila.film
WHERE title LIKE '_C%'; --(Encontra qualquer resultado em que o segundo caractere da frase é)

SELECT * FROM sakila.film
WHERE title LIKE '________'; --(Encontra qualquer resultado em que o título possui exatamente 8 caracteres)

SELECT * FROM sakila.film
WHERE title LIKE 'E__%'; --(Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E)

-- IN e BETWEEN (englobando uma faixa de resultados)

-- IN
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER'); --(vai procurar na os nomes na coluna)
--Você poderia fazer esse mesmo processo para números também:
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);

-- Sintaxe do IN:
SELECT * FROM banco_de_dados
WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

-- ou também:
SELECT * FROM banco_de_dados
WHERE coluna IN (expressão);

-- BETWEEN
-- possível fazer pesquisas dentro de uma faixa inicial e final.

expressão BETWEEN valor1 AND valor2;
-- a expressão é a sua query
-- e valor1 e valor2 delimitam o resultado

SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- BETWEEN com strings
-- Para encontrar uma faixa de valores em que os valores são strings, podemos digitar a palavra por completo para encontrar os valores. Exemplo:
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- BETWEEN com datas
-- Para usar o BETWEEN com datas, basta que você digite o valor no formato padrão da data, que é YYYY-MM-DD HH:MM:SS, sendo os valores de horas, minutos e segundos opcionais.
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- Data e tempo
-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo