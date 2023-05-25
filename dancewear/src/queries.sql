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

CREATE TABLE Product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	price INT NOT NULL
);

INSERT INTO Product (name, description, price) VALUES ('Polly Leotard', 'Pink, velvet leotard. High cut. Backless', 20);
INSERT INTO Product (name, description, price) VALUES ('Ruby Tap Shoes', 'Ruby red tap shoes. Perfect for those looking to add a bit of pizazz', 22);
INSERT INTO Product (name, description, price) VALUES ('Alice Ballet Bag', 'Baby pink ballet bag with dancer pattern', 18);
INSERT INTO Product (name, description, price) VALUES ('Angel tutu', 'Stunning white tutu with rhinestones', 40);