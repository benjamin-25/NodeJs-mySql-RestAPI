CREATE DATABASE IF NOT EXISTS companyDB;

USE companyDB;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salary INT(15) DEFAULT NULL,
    PRIMARY KEY(id)
);

SHOW tables;

DESCRIBE employees;

