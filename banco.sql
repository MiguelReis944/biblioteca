create database biblioteca;
use biblioteca;

create table livros(
	id int AUTO_INCREMENT primary key,
    public_id CHAR(36) not null unique,
    titulo varchar(50),
    autor varchar(50),
    genero varchar(50),
    descricao varchar(500),
    ano year,
    quantidade_total int,
    quantidade_disponivel int
);

create table clientes(
	id int AUTO_INCREMENT primary key,
    public_id CHAR(36) not null unique,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(250) NOT NULL,
    tipo ENUM('user','admin') NOT null DEFAULT 'user',
    ativo TINYINT(1) NOT NULL DEFAULT 1
);

create table emprestimo(
    id int AUTO_INCREMENT PRIMARY KEY,
    id_publico char(36) NOT NULL UNIQUE,
    id_cliente int not null,
    id_livro int not null,
    data_retirada DATE not null,
    data_prevista DATE,
    data_entrega DATE,
    ativo TINYINT(1) NOT NULL DEFAULT 1,
    multa DECIMAL(10,2) DEFAULT 0
    FOREIGN KEY (id_cliente) REFERENCES clientes(id),
    FOREIGN KEY (id_livro) REFERENCES livros(id)
);

