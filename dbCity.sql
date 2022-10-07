create database dbCity;

use dbCity;

create table cliente
(
cod_cli int primary key,
nome_cli varchar(50),
idade int,
email varchar(50)
);

create table produto
(	
cod_prod int primary key,
nome_prod varchar(50),
descricao varchar(50),
preco_custo decimal(10,2)
);

insert into cliente (cod_cli, nome_cli, idade, email) values (01,'ciddade',19,'cidade@city.com');

insert into produto (cod_prod, nome_prod, descricao, preco_custo) values (02,'mouse','mouse gamer', precocusto);

/* Igualdade */
select 
nome_cli,tbcliente
idade
from cliente where cod_cli = 1 and idade < 18;

/* Diferença */
select
nome_cli,
idade
from cliente where idade <> 18;

/* Maior que */
select 
descricao,
preco_custo
from produtos where preco_custo >= 12;

select
descricao,
preco_custo
from produto where preco_custo between 20 and 30;

select 
nome_cli
from cliente where nome_cli like '%MO%';

/* In */
select
descricao,
cod_prod
from produto where descricao in ('caderno','tablet');

/* And e Or */
select
cod_prod,
descricao,
preco_custo,
venda
from produto where venda >= (preco_custo + (preco_custo * 0.1)) and categoria = 1;
