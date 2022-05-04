DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    text TEXT NOT NULL,
    PRIMARY KEY (id)
);