-- CREATE DB
USE master

if exists(select * from sys.databases where name='sales')
  DROP DATABASE sales

CREATE DATABASE sales
GO

use sales

--

-- CREATE INVENTORY

if OBJECT_ID('dbo.inventory', 'U') IS NOT NULL
  DROP table inventory

CREATE TABLE inventory (
  id  int NOT NULL PRIMARY KEY identity(1,1),
  name varchar(255) NOT NULL,
  price decimal NOT NULL
);

create index idx_inventory_name on inventory (name)
GO

--

-- CREATE persons

if object_id('dbo.persons', 'U') is not null
  drop table persons

create table persons (
  id int not null primary key identity(1,1),
  name varchar(255)
);

GO

--

-- CREATE orders

if object_id('dbo.orders', 'U') is not null
  drop table orders

create table orders (
  id int not null primary key identity(1,1),
  fk_itemid int not null,
  address varchar(512),
  price_paid decimal,
  fk_salesperson int not null,
  constraint fk_itemid foreign key (fk_itemid) references inventory(id),
  constraint fk_salesperson foreign key (fk_salesperson) references persons(id)
);

GO


-- SEED DATA

-- INVENTORY
insert into inventory (name, price) values ('Juul Starter Kit', 34.99)
insert into inventory (name, price) values ('Fruit POD', 24.99)
insert into inventory (name, price) values ('Cucumber POD', 24.99)
insert into inventory (name, price) values ('Tobacco POD', 24.99)
insert into inventory (name, price) values ('Vanilla POD', 24.99)
insert into inventory (name, price) values ('Chocolate POD', 24.99)
--

-- PERSONS
insert into persons (name) values ('Bob')
insert into persons (name) values ('Sally')
insert into persons (name) values ('Chris')
--

insert into orders (
  fk_itemid,
  address,
  price_paid,
  fk_salesperson
) VALUES (
  (select id from inventory where name='Juul Starter Kit'),
  '1234 Sesame St',
  34.99,
  (select id from persons where name='Bob')
)

insert into orders (
  fk_itemid,
  address,
  price_paid,
  fk_salesperson
) VALUES (
  (select id from inventory where name='Fruit POD'),
  '551 Something St',
  24.99,
  (select id from persons where name='Sally')
)

insert into orders (
  fk_itemid,
  address,
  price_paid,
  fk_salesperson
) values (
  (select id from inventory where name='Vanilla POD'),
  '5354 J St',
  24.99,
  (select id from persons where name='Chris')
)

insert into orders (
  fk_itemid,
  address,
  price_paid,
  fk_salesperson
) values (
  (select id from inventory where name='Cucumber POD'),
  '54545 j ST',
  14.99,
  (select id from persons where name='Bob')
)

insert into orders (
  fk_itemid,
  address,
  price_paid,
  fk_salesperson
) values (
  (select id from inventory where name='Fruit POD'),
  '423423 X Street',
  19.99,
  (select id from persons where name='Sally')
)


