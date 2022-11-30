-- Exercício 3: 🚀 Monte uma query que:
--Crie um banco de dados chamado normalization;
CREATE DATABASE IF NOT EXISTS normalization;
--Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
CREATE TABLE funcionarios (
	funcionario_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50),
    sobrenome VARCHAR(50),
    email VARCHAR(100),
    contato VARCHAR(20),
    data_cadastro DATETIME
) ENGINE=InnoDB;

CREATE TABLE setor (
	setor_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE setor_funcionario (
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios (funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
) ENGINE=InnoDB;
--Popule todas as tabelas com os dados fornecidos nos exercícios.
INSERT INTO funcionarios (funcionario_id, name, sobrenome, email, contato, data_cadastro)
VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO setor (nome)
VALUES 
('Administracao'),
('Estrategico'),
('Marketing'),
('Operacional'),
('Vendas');

INSERT INTO setor_funcionario (funcionario_id, setor_id)
VALUES
	(12, 1),
    (12, 5),
    (13, 4),
    (14, 5),
    (14, 2),
    (15, 3);