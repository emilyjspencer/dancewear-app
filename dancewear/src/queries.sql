DROP SCHEMA IF EXISTS dancewear;
CREATE SCHEMA IF NOT EXISTS dancewear;
USE dancewear;

CREATE TABLE User (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	firstname varchar(30) NOT NULL,
	lastname varchar(30) NOT NULL
);

INSERT INTO User (firstname, lastname) VALUES ('James', 'Smith');
INSERT INTO User (firstname, lastname) VALUES ('Sally', 'Green');
INSERT INTO User (firstname, lastname) VALUES ('Laura', 'Thompson');
INSERT INTO User (firstname, lastname) VALUES ('Matthew', 'Edwards');