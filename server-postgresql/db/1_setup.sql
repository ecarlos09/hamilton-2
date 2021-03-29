DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(255) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    PASSWORD_DIGEST varchar(500) NOT NULL
);

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    repos int NOT NULL,
    partner_id int
);

DROP TABLE IF EXISTS partners;

CREATE TABLE partners (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    location varchar(255)
);