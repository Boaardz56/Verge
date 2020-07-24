DROP SCHEMA IF EXISTS sakila;
CREATE SCHEMA sakila;
USE sakila;

CREATE TABLE stores
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	open BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);