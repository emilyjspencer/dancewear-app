DROP SCHEMA IF EXISTS dancewear;
CREATE SCHEMA IF NOT EXISTS dancewear;
USE dancewear;

CREATE TABLE User (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
    email varchar(40) NOT NULL,
    phone_number bigint NOT NULL
);

INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('James', 'Smith', 'james@email.com', 8327382372);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Sally', 'Green', 'sally@email.com', 4898493);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Laura', 'Thompson', 'laura@email.com', 58395839);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Matthew', 'Edwards', 'matt@email.com', 7434834);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Jonny', 'Jones', 'jonny@email.com', 2783734);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Imelda', 'Staunton', 'imelda@email.com', 18374742);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Sandra', 'Bullock', 'sandra@email.com', 7493853984);
INSERT INTO User (first_name, last_name, email, phone_number) VALUES ('Ryan', 'Reynolds', 'ryan@email.com', 73875837);


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
INSERT INTO PRODUCT (name, description, price) VALUES ('Black male leotard', 'Smart black leotard for men', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz scrunchie', 'Pink sparkly scrunchy', 3);
INSERT INTO PRODUCT (name, description, price) VALUES ('Ballerina duvet cover', 'Ages 3+', 22);
INSERT INTO PRODUCT (name, description, price) VALUES ('Revolution Leotard', 'Blue and silver gymnastics leotard', 28);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Character shoes', 'Black with pink elastic', 18);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Character shoes', 'Grey with pink elastic', 18);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Character shoes', 'Beige with pink elastic', 18);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Tap shoes', 'Black with toe tapping board', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Tap shoes', 'Black with heel and toe tapping boards', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Tap shoes', 'White with toe tapping board', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Tap shoes', 'White with heel and toe tapping boards', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz Tap shoes', 'Black with toe tapping board', 20);
INSERT INTO PRODUCT (name, description, price) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Black', 24);
INSERT INTO PRODUCT (name, description, price) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Pink', 24);
INSERT INTO PRODUCT (name, description, price) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Blue', 24);
INSERT INTO PRODUCT (name, description, price) VALUES ('Capezio pointe shoes', 'Perfect for those new to dancing en pointe. Pink', 28);
INSERT INTO PRODUCT (name, description, price) VALUES ('Capezio pointe shoes', 'Perfect for those new to dancing en pointe. White', 28);
INSERT INTO PRODUCT (name, description, price) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. Pink', 30);
INSERT INTO PRODUCT (name, description, price) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. White', 30);
INSERT INTO PRODUCT (name, description, price) VALUES ('Revolution  leotard', 'Purple', 19);
INSERT INTO PRODUCT (name, description, price) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. Pink', 30);
INSERT INTO PRODUCT (name, description, price) VALUES ('Chicago Costume', 'Black dress with fringe', 21);
INSERT INTO PRODUCT (name, description, price) VALUES ('Cats the Musical costume', 'Miaow', 28);
INSERT INTO PRODUCT (name, description, price) VALUES ('Katz t-shirt', 'Pink', 15);




CREATE TABLE Review (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	stars INT NOT NULL,
	author_id INT NOT NULL,
	product_id INT NOT NULL,
	FOREIGN KEY (author_id) REFERENCES User(id),
	FOREIGN KEY (product_id) REFERENCES Product(id)
);

INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (1, 1, 'Great leotard', 'I love it', 5);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (1, 2, 'Great bag', 'I love it', 5);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (2, 1, 'Great tutu', 'I love it', 4);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (2, 2, 'Great tutu' ,'I love it', 4);


CREATE TABLE Blog (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	author_id INT NOT NULL,
	body varchar(3000) NOT NULL,
	date_of_blog_post DATE NOT NULL,
	FOREIGN KEY (author_id) REFERENCES User(id)
);

INSERT INTO Blog (title, author_id, body, date_of_blog_post) VALUES ('Why dance makes a great hobby', 3, 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, author_id, body, date_of_blog_post) VALUES ('Why dance makes a great hobby', 3, 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));


CREATE TABLE Brand (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL
);

INSERT INTO Brand (name) VALUES ('Katz');
INSERT INTO Brand (name) VALUES ('Pineapple');
INSERT INTO Brand (name) VALUES ('Bloch');
INSERT INTO Brand (name) VALUES ('Capezio');
INSERT INTO Brand (name) VALUES ('1st Position');
INSERT INTO Brand (name) VALUES ('Ballet Rosa');
INSERT INTO Brand (name) VALUES ('Little Ballerina');
INSERT INTO Brand (name) VALUES ('Revolution');

CREATE TABLE Category (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL
);

INSERT INTO Category (name) VALUES ('Tutus');
INSERT INTO Category (name) VALUES ('Tap Shoes');
INSERT INTO Category (name) VALUES ('Bags');
INSERT INTO Category (name) VALUES ('Accessories');
INSERT INTO Category (name) VALUES ('Gymnastics');
INSERT INTO Category (name) VALUES ('Costumes');
INSERT INTO Category (name) VALUES ('Character Shoes');
INSERT INTO Category (name) VALUES ('Ballet Shoes');
INSERT INTO Category (name) VALUES ('Pointe Shoes');
INSERT INTO Category (name) VALUES ('Dance Trainers');
INSERT INTO Category (name) VALUES ('Jazz Shoes');
INSERT INTO Category (name) VALUES ('Leotards');
INSERT INTO Category (name) VALUES ('Tops');
INSERT INTO Category (name) VALUES ('Trousers');
INSERT INTO Category (name) VALUES ('Casual');



CREATE TABLE CATEGORY_BRAND (
    category_id INT NOT NULL,
	brand_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES Category(id),
	FOREIGN KEY (brand_id) REFERENCES Brand(id)
);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,2);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,3);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,4);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,5);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,6);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,7);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (2,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (2,2);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (2,3);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (2,4);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (2,7);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (3,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (3,2);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (3,6);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (3,7);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (4,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (4,2);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (4,6);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (4,7);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (4,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (5,5);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (5,8);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (6,5);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (6,8);


CREATE TABLE CATEGORY_PRODUCT (
    category_id INT NOT NULL,
	product_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES Category(id),
	FOREIGN KEY (product_id) REFERENCES Product(id)
);

INSERT INTO CATEGORY_PRODUCT(CATEGORY_id, PRODUCT_id) values (15,28);