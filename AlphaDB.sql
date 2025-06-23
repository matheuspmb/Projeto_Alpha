-- Criação do banco
CREATE DATABASE AlphaDB;
GO

USE AlphaDB;
GO

-- Tabela de usuários
CREATE TABLE Usuarios (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Usuario NVARCHAR(50) NOT NULL,
    Senha NVARCHAR(50) NOT NULL
);

-- Tabela de produtos
CREATE TABLE Produtos (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo INT NOT NULL,
    Descricao NVARCHAR(100),
    CodigoBarras NVARCHAR(100),
    ValorVenda DECIMAL(18,2),
    PesoBruto DECIMAL(18,2),
    PesoLiquido DECIMAL(18,2)
);

-- Tabela de clientes
CREATE TABLE Clientes (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Codigo INT NOT NULL,
    Nome NVARCHAR(100),
    Fantasia NVARCHAR(50),
    Documento NVARCHAR(50),
    Endereco NVARCHAR(50)
);

-- Dados de exemplo
INSERT INTO Usuarios (Usuario, Senha) VALUES ('admin', 'admin');

INSERT INTO Produtos (Codigo, Descricao, CodigoBarras, ValorVenda, PesoBruto, PesoLiquido) VALUES
(1001, 'Produto A', '7891234567890', 9.90, 1.20, 1.00),
(1002, 'Produto B', '9384756012453', 8.80, 1.50, 1.20),
(1003, 'Produto C', '5634512312345', 5.50, 1.60, 1.30);

INSERT INTO Clientes (Codigo, Nome, Fantasia, Documento, Endereco) VALUES
(2001, 'Cliente A', 'Fantasia A', '1234567890', 'Rua das flores, 123'),
(2002, 'Cliente B', 'Fantasia B', '2134567890', 'Rua dos peixes, 456'),
(2003, 'Cliente C', 'Fantasia C', '3124567890', 'Rua dos alces, 789');
