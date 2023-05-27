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
INSERT INTO User (firstname, lastname) VALUES ('Jonny', 'Jones');
INSERT INTO User (firstname, lastname) VALUES ('Imelda', 'Staunton');
INSERT INTO User (firstname, lastname) VALUES ('Sandra', 'Bullock');
INSERT INTO User (firstname, lastname) VALUES ('Ryan', 'Reynolds');

<!-- Will make associations later -->
CREATE TABLE Product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	price INT NOT NULL
);

<!-- Will make associations later -->
INSERT INTO Product (name, description, price) VALUES ('Polly Leotard', 'Pink, velvet leotard. High cut. Backless', 20);
INSERT INTO Product (name, description, price) VALUES ('Ruby Tap Shoes', 'Ruby red tap shoes. Perfect for those looking to add a bit of pizazz', 22);
INSERT INTO Product (name, description, price) VALUES ('Alice Ballet Bag', 'Baby pink ballet bag with dancer pattern', 18);
INSERT INTO Product (name, description, price) VALUES ('Angel tutu', 'Stunning white tutu with rhinestones', 40);


<!-- will make associations later -->
CREATE TABLE Review (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	author varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	stars INT NOT NULL
);

<!-- will make user associations later -->
INSERT INTO Review (author, title, description, stars) VALUES ('Emily', 'Great tutu', 'I love it', 5);
INSERT INTO Review (author, title, description, stars) VALUES ('Emily', 'Great tutu', 'I love it', 5);
INSERT INTO Review (author, title, description, stars) VALUES ('Emily', 'Great tutu', 'I love it', 5);
INSERT INTO Review (author, title, description, stars) VALUES ('Emily', 'Great tutu' ,'I love it', 5);