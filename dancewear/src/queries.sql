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


CREATE TABLE Product (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	price INT NOT NULL
	brand_id INT NOT NULL,
	category_id INT NOT NULL,
	FOREIGN KEY (brand_id) REFERENCES Brand(id),
	FOREIGN KEY (category_id) REFERENCES Category(id),
);

<!-- Will make associations later -->
INSERT INTO Product (name, description, price, brand_id, category_id) VALUES ('Polly Leotard', 'Pink, velvet leotard. High cut. Backless', 20, 1, 1);
INSERT INTO Product (name, description, price, brand_id, category_id) VALUES ('Ruby Tap Shoes', 'Ruby red tap shoes. Perfect for those looking to add a bit of pizazz', 22);
INSERT INTO Product (name, description, price, brand_id, category_id) VALUES ('Alice Ballet Bag', 'Baby pink ballet bag with dancer pattern', 18);
INSERT INTO Product (name, description, price, brand_id, category_id) VALUES ('Angel tutu', 'Stunning white tutu with rhinestones', 40);
INSERT INTO PRODUCT (name, description, price, brand_id, category_id) VALUES ('Black male leotard', 'Smart black leotard for men', 20);
INSERT INTO PRODUCT (name, description, price, brand_id, category_id) VALUES ('Katz scrunchie', 'Pink sparkly scrunchy', 3);


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

<!-- will make user associations later -->
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (1, 1, 'Great leotard', 'I love it', 5);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (1, 2, 'Great bag', 'I love it', 5);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (2, 1, 'Great tutu', 'I love it', 4);
INSERT INTO Review (author_id, product_id, title, description, stars) VALUES (2, 2, 'Great tutu' ,'I love it', 4);


CREATE TABLE Blog (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	author_id INT NOT NULL,
	body varchar(3000) NOT NULL,
	dateOfBlogPost DATE NOT NULL,
	FOREIGN KEY (author_id) REFERENCES User(id)
);

INSERT INTO Blog (title, author_id, body, date_of_blog_post) VALUES ('Why dance makes a great hobby', 3, 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, author_id, body, date_of_blog_post) VALUES ('Why dance makes a great hobby', 3, 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));


CREATE TABLE Brand (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	categoryId INT NOT NULL
);

INSERT INTO Brand (name) VALUES ('Katz');
INSERT INTO Brand (name) VALUES ('Pineapple');
INSERT INTO Brand (name) VALUES ('Bloch');
INSERT INTO Brand (name) VALUES ('Capezio');
INSERT INTO Brand (name) VALUES ('1st Position');
INSERT INTO Brand (name) VALUES ('Ballet Rosa');
INSERT INTO Brand (name) VALUES ('Little Ballerina');

CREATE TABLE Category (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL
);

INSERT INTO Category (name) VALUES ('Dancewear');
INSERT INTO Category (name) VALUES ('Shoes');
INSERT INTO Category (name) VALUES ('Bags');
INSERT INTO Category (name) VALUES ('Accessories');
INSERT INTO Category (name) VALUES ('Gymnastics wear');
INSERT INTO Category (name) VALUES ('Costumes');


<!-- many to many
 categories  have many brands
 brands have many categories-->

CREATE TABLE CATEGORY_BRAND (
    category_id INT NOT NULL,
	brand_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES Category(id),
	FOREIGN KEY (brand_id) REFERENCES Brand(id)
);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);
INSERT INTO CATEGORY_BRAND(CATEGORY_id, BRAND_id) values (1,1);