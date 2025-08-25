create database FilmMix
default character set utf8
default collate utf8_general_ci;

use FilmMix;

create table if not exists dadosCliente(
	id int auto_increment,
    usuario varchar(100),
    senha varchar(64),
    cadPessoaFisico varchar(16),
    email varchar(120),
    nascimento date,
    cidade varchar(150),
    estado varchar(50),
    primary key(id)
)default charset = utf8;

select * from dadosCliente;