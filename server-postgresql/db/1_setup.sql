DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    git_username varchar(100) NOT NULL,
    repos int NOT NULL,
    partner_id int
);

DROP TABLE IF EXISTS partners;

CREATE TABLE partners (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    location varchar(255)
);