--1 Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
	CONCAT(e.first_name, ' ', e.last_name) AS 'Colaborador',
    CONCAT(m.first_name, ' ', m.last_name) AS 'Gerente'
FROM
	hr.employees AS e
INNER JOIN
	hr.employees AS m ON e.manager_id = m.employee_id
WHERE
	e.department_id <> m.department_id;
--2 Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
	CONCAT(m.first_name, ' ', m.last_name) AS 'Nome Gerente',
    COUNT(*)
FROM 
	hr.employees AS m
INNER JOIN
	hr.employees AS e ON e.manager_id = m.employee_id
GROUP BY
	m.employee_id;
    
