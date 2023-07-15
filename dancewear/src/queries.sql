DROP SCHEMA IF EXISTS dancewear;
CREATE SCHEMA IF NOT EXISTS dancewear;
USE dancewear;

CREATE TABLE User (
	user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
    email varchar(40) NOT NULL,
    phone_number BIGINT NOT NULL,
    user_password varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    account_number BIGINT NOT NULL
);

INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('James', 'Smith', 'james@email.com', 8327382372, 'password' ,'1 Cherry Tree Lane', 545435);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Sally', 'Green', 'sally@email.com', 4898493, 'password', '2 Cherry Tree Lane', 5435435);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Laura', 'Thompson', 'laura@email.com', 58395839, 'password', '3 Cherry Tree Lane', 7574457);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Matthew', 'Edwards', 'matt@email.com', 7434834, 'password', '4 Cherry Tree Lane', 8746474);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Jonny', 'Jones', 'jonny@email.com', 2783734, 'password', '5 Cherry Tree Lane', 75925832);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Imelda', 'Staunton', 'imelda@email.com', 18374742, 'password', '6 Cherry Tree Lane', 232424);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Sandra', 'Bullock', 'sandra@email.com', 7493853984, 'password', '7 Cherry Tree Lane', 1232535);
INSERT INTO User (first_name, last_name, email, phone_number, user_password, address, account_number) VALUES ('Ryan', 'Reynolds', 'ryan@email.com', 73875837, 'password', '8 Cherry Tree Lane', 454646);

CREATE TABLE Brand (
	brand_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	brand_name varchar(30) NOT NULL,
	description varchar(400) NOT NULL
);

INSERT INTO Brand (brand_name, description) VALUES ('Katz', 'Katz is' );
INSERT INTO Brand (brand_name, description) VALUES ('Pineapple', 'Pineapple is');
INSERT INTO Brand (brand_name, description) VALUES ('Bloch', 'Bloch is' );
INSERT INTO Brand (brand_name, description) VALUES ('Capezio', 'Capezio');
INSERT INTO Brand (brand_name, description) VALUES ('1st Position', '1st position is');
INSERT INTO Brand (brand_name, description) VALUES ('Ballet Rosa', 'Ballet Rosa is');
INSERT INTO Brand (brand_name, description) VALUES ('Little Ballerina', 'Little Ballerina is');
INSERT INTO Brand (brand_name, description) VALUES ('Revolution', 'Revolution is');

CREATE TABLE Category (
	category_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	category_name varchar(30) NOT NULL
);

INSERT INTO Category (category_name) VALUES ('Tutus');
INSERT INTO Category (category_name) VALUES ('Tap Shoes');
INSERT INTO Category (category_name) VALUES ('Bags');
INSERT INTO Category (category_name) VALUES ('Accessories');
INSERT INTO Category (category_name) VALUES ('Gymnastics');
INSERT INTO Category (category_name) VALUES ('Costumes');
INSERT INTO Category (category_name) VALUES ('Character Shoes');
INSERT INTO Category (category_name) VALUES ('Ballet Shoes');
INSERT INTO Category (category_name) VALUES ('Pointe Shoes');
INSERT INTO Category (category_name) VALUES ('Dance Trainers');
INSERT INTO Category (category_name) VALUES ('Jazz Shoes');
INSERT INTO Category (category_name) VALUES ('Leotards');
INSERT INTO Category (category_name) VALUES ('Tops');
INSERT INTO Category (category_name) VALUES ('Trousers');
INSERT INTO Category (category_name) VALUES ('Casual');



CREATE TABLE Product (
	product_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	product_name varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	price INT NOT NULL,
	brand_id INT NOT NULL,
	category_id INT NOT NULL,
	FOREIGN KEY (brand_id) REFERENCES Brand(brand_id),
	FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

INSERT INTO Product (product_name, description, price, brand_id, category_id) VALUES ('Polly Leotard', 'Pink, velvet leotard. High cut. Backless', 20, 1, 12);
INSERT INTO Product (product_name, description, price, brand_id, category_id) VALUES ('Ruby Tap Shoes', 'Ruby red tap shoes. Perfect for those looking to add a bit of pizazz', 22, 2, 2);
INSERT INTO Product (product_name, description, price, brand_id, category_id) VALUES ('Alice Ballet Bag', 'Baby pink ballet bag with dancer pattern', 18, 6, 3);
INSERT INTO Product (product_name, description, price, brand_id, category_id) VALUES ('Angel tutu', 'Stunning white tutu with rhinestones', 40, 5, 1);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Black male leotard', 'Smart black leotard for men', 20, 2, 12);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz scrunchie', 'Pink sparkly scrunchy', 3, 1, 4);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Ballerina duvet cover', 'Ages 3+', 22, 7, 4);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Revolution Leotard', 'Blue and silver gymnastics leotard', 28, 8, 5);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Character shoes', 'Black with pink elastic', 18, 1, 7);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Character shoes', 'Grey with pink elastic', 18, 1, 7);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Character shoes', 'Beige with pink elastic', 18, 1, 7);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Tap shoes', 'Black with toe tapping board', 20, 1, 2);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Tap shoes', 'Black with heel and toe tapping boards', 20, 1, 2);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Tap shoes', 'White with toe tapping board', 20, 1 , 2);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Tap shoes', 'White with heel and toe tapping boards', 20, 1, 2);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz Tap shoes', 'Black with toe tapping board', 20, 1, 2);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Black', 24, 2, 10);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Pink', 24, 2, 10);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Pineapple dance trainers', 'Perfect for modern dance. Blue', 24, 2, 10);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Capezio pointe shoes', 'Perfect for those new to dancing en pointe. Pink', 28, 4, 9);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Capezio pointe shoes', 'Perfect for those new to dancing en pointe. White', 28, 4, 9);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. Pink', 30, 4, 9);
INSERT INTO PRODUCT (product_name, description, price ,brand_id, category_id) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. White', 3, 4, 9);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Revolution  leotard', 'Purple', 19, 8, 12);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Capezio pointe shoes', 'Perfect for more experienced ballerinas. Pink', 30, 4, 9);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Chicago Costume', 'Black dress with fringe', 21, 8, 6);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Cats the Musical costume', 'Miaow', 28, 8, 6);
INSERT INTO PRODUCT (product_name, description, price, brand_id, category_id) VALUES ('Katz t-shirt', 'Pink', 15, 1, 15);




CREATE TABLE Review (
	review_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(30) NOT NULL,
	description varchar(200) NOT NULL,
	stars INT NOT NULL,
    posted_date Date NOT NULL,
	author_id INT NOT NULL,
	product_id INT NOT NULL,
	FOREIGN KEY (author_id) REFERENCES User(user_id),
	FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

INSERT INTO Review (author_id, product_id, title, description, stars, posted_date) VALUES (1, 1, 'Great leotard', 'I love it', 5, STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Review (author_id, product_id, title, description, stars, posted_date) VALUES (1, 2, 'Great bag', 'I love it', 5, STR_TO_DATE("May 18 2023", "%M %d %Y"));
INSERT INTO Review (author_id, product_id, title, description, stars, posted_date) VALUES (2, 1, 'I love this leotard', 'I love it', 4, STR_TO_DATE("May 26 2023", "%M %d %Y"));
INSERT INTO Review (author_id, product_id, title, description, stars, posted_date) VALUES (2, 2, 'Great tutu' ,'I love it', 4, STR_TO_DATE("June 2 2023", "%M %d %Y"));


CREATE TABLE Blog (
	blog_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title varchar(50) NOT NULL,
	post varchar(3000) NOT NULL,
	date_published DATE NOT NULL
);

INSERT INTO Blog (title, post, date_published) VALUES ('Why dance makes a great hobby', 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title,  post, date_published) VALUES ('Darcey Bussel', 'Sed eleifend nec augue nec venenatis. Maecenas quis nulla molestie metus dignissim dapibus. Sed vitae elementum erat. Fusce bibendum fermentum diam vitae malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque quis pulvinar felis. Sed posuere venenatis auctor. Praesent quis urna et turpis sagittis sagittis. Sed ultrices massa lectus, at malesuada erat mattis sit amet. Mauris sem diam, aliquet id dignissim et, congue a libero. Integer facilisis urna et feugiat varius. Duis egestas feugiat leo, ac pretium neque tincidunt et.Phasellus in erat a leo accumsan tristique cursus et velit. Proin finibus felis mauris, nec rutrum urna lobortis vel. Sed scelerisque purus non ex blandit, sed posuere eros vestibulum. Aenean id enim iaculis, iaculis nisi sit amet, condimentum est. Donec a enim aliquam, pharetra magna ut, tristique metus. Nunc tempus sed magna quis luctus. Etiam nec ex mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a metus eget nisl mattis luctus. Aliquam purus dolor, accumsan ut tellus vel, consequat laoreet libero. Donec venenatis hendrerit orci ut luctus. Aliquam vitae nisl vitae lacus luctus rutrum vitae nec augue. Nam mollis erat sed dignissim vestibulum. Aenean porttitor ullamcorper mi non luctus. Aenean malesuada, nunc quis faucibus gravida, nisl nunc congue sem, vel vestibulum orci nunc a dui. Vestibulum aliquet sem nec accumsan mattis. Aliquam sit amet auctor mi. Pellentesque ornare mauris nec accumsan suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget mi magna. Phasellus mattis sem et lorem rutrum, eget imperdiet erat tincidunt. Proin vel finibus lorem. Mauris pulvinar, elit vel euismod vehicula, ante leo posuere leo, sit amet pulvinar libero justo id enim. Fusce facilisis diam justo, faucibus sollicitudin justo venenatis et. Pellentesque ac ipsum sollicitudin, facilisis est ut, mattis odio. Etiam in volutpat tortor. Praesent vitae tellus ac lorem pulvinar blandit. Donec eget diam a leo cursus convallis sed eu libero.',  STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, post, date_published) VALUES ('25 ones to watch!', 'Aenean pellentesque, leo tincidunt ullamcorper molestie, dui velit lobortis ligula, sed rutrum sapien leo nec nibh. Fusce fringilla tempus urna et facilisis. Praesent a neque metus. Nam convallis felis ut viverra tempor. Quisque ut hendrerit lectus. Nunc ullamcorper et ligula non interdum. Aenean sit amet sapien eu sapien sodales suscipit in non turpis. Mauris odio lectus, consequat eleifend libero eget, viverra accumsan ante. Phasellus in nisl massa. Proin sit amet tortor et ante varius eleifend in eu enim. Fusce nisi magna, aliquam vitae feugiat nec, cursus nec nunc. Sed elit nulla, semper non luctus eu, cursus id libero. Nullam metus nunc, dapibus non est id, ullamcorper porttitor purus. Nunc bibendum turpis nec risus fermentum iaculis. Quisque aliquet at nunc quis faucibus. Ut commodo volutpat dolor ac ornare. Ut sed ante magna. Praesent ac nisl tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec justo erat. Suspendisse vehicula sollicitudin sem non tristique. Fusce ex ante, pretium at cursus vitae, accumsan non ante. Ut dapibus purus eu porta faucibus. Curabitur eu lectus sed enim mattis finibus. Suspendisse risus leo, efficitur a erat ut, dignissim pharetra arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lobortis aliquet dictum. Donec non pellentesque sem, a tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat lacinia magna id convallis.', STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, post, date_published) VALUES ('Best foot strengthening exercises',  'Aenean pellentesque, leo tincidunt ullamcorper molestie, dui velit lobortis ligula, sed rutrum sapien leo nec nibh. Fusce fringilla tempus urna et facilisis. Praesent a neque metus. Nam convallis felis ut viverra tempor. Quisque ut hendrerit lectus. Nunc ullamcorper et ligula non interdum. Aenean sit amet sapien eu sapien sodales suscipit in non turpis. Mauris odio lectus, consequat eleifend libero eget, viverra accumsan ante. Phasellus in nisl massa. Proin sit amet tortor et ante varius eleifend in eu enim. Fusce nisi magna, aliquam vitae feugiat nec, cursus nec nunc. Sed elit nulla, semper non luctus eu, cursus id libero. Nullam metus nunc, dapibus non est id, ullamcorper porttitor purus. Nunc bibendum turpis nec risus fermentum iaculis. Quisque aliquet at nunc quis faucibus. Ut commodo volutpat dolor ac ornare. Ut sed ante magna. Praesent ac nisl tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec justo erat. Suspendisse vehicula sollicitudin sem non tristique. Fusce ex ante, pretium at cursus vitae, accumsan non ante. Ut dapibus purus eu porta faucibus. Curabitur eu lectus sed enim mattis finibus. Suspendisse risus leo, efficitur a erat ut, dignissim pharetra arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lobortis aliquet dictum. Donec non pellentesque sem, a tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat lacinia magna id convallis.', STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, post, date_published) VALUES ('Combatting eating disorders in the dance world', 'Aenean pellentesque, leo tincidunt ullamcorper molestie, dui velit lobortis ligula, sed rutrum sapien leo nec nibh. Fusce fringilla tempus urna et facilisis. Praesent a neque metus. Nam convallis felis ut viverra tempor. Quisque ut hendrerit lectus. Nunc ullamcorper et ligula non interdum. Aenean sit amet sapien eu sapien sodales suscipit in non turpis. Mauris odio lectus, consequat eleifend libero eget, viverra accumsan ante. Phasellus in nisl massa. Proin sit amet tortor et ante varius eleifend in eu enim. Fusce nisi magna, aliquam vitae feugiat nec, cursus nec nunc. Sed elit nulla, semper non luctus eu, cursus id libero. Nullam metus nunc, dapibus non est id, ullamcorper porttitor purus. Nunc bibendum turpis nec risus fermentum iaculis. Quisque aliquet at nunc quis faucibus. Ut commodo volutpat dolor ac ornare. Ut sed ante magna. Praesent ac nisl tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec justo erat. Suspendisse vehicula sollicitudin sem non tristique. Fusce ex ante, pretium at cursus vitae, accumsan non ante. Ut dapibus purus eu porta faucibus. Curabitur eu lectus sed enim mattis finibus. Suspendisse risus leo, efficitur a erat ut, dignissim pharetra arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lobortis aliquet dictum. Donec non pellentesque sem, a tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat lacinia magna id convallis.', STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, post, date_published) VALUES ('What makes Urdang unique', 'Aenean pellentesque, leo tincidunt ullamcorper molestie, dui velit lobortis ligula, sed rutrum sapien leo nec nibh. Fusce fringilla tempus urna et facilisis. Praesent a neque metus. Nam convallis felis ut viverra tempor. Quisque ut hendrerit lectus. Nunc ullamcorper et ligula non interdum. Aenean sit amet sapien eu sapien sodales suscipit in non turpis. Mauris odio lectus, consequat eleifend libero eget, viverra accumsan ante. Phasellus in nisl massa. Proin sit amet tortor et ante varius eleifend in eu enim. Fusce nisi magna, aliquam vitae feugiat nec, cursus nec nunc. Sed elit nulla, semper non luctus eu, cursus id libero. Nullam metus nunc, dapibus non est id, ullamcorper porttitor purus. Nunc bibendum turpis nec risus fermentum iaculis. Quisque aliquet at nunc quis faucibus. Ut commodo volutpat dolor ac ornare. Ut sed ante magna. Praesent ac nisl tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec justo erat. Suspendisse vehicula sollicitudin sem non tristique. Fusce ex ante, pretium at cursus vitae, accumsan non ante. Ut dapibus purus eu porta faucibus. Curabitur eu lectus sed enim mattis finibus. Suspendisse risus leo, efficitur a erat ut, dignissim pharetra arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lobortis aliquet dictum. Donec non pellentesque sem, a tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat lacinia magna id convallis.', STR_TO_DATE("May 10 2023", "%M %d %Y"));
INSERT INTO Blog (title, post, date_published) VALUES ('Your favourite dance movies', 'Aenean pellentesque, leo tincidunt ullamcorper molestie, dui velit lobortis ligula, sed rutrum sapien leo nec nibh. Fusce fringilla tempus urna et facilisis. Praesent a neque metus. Nam convallis felis ut viverra tempor. Quisque ut hendrerit lectus. Nunc ullamcorper et ligula non interdum. Aenean sit amet sapien eu sapien sodales suscipit in non turpis. Mauris odio lectus, consequat eleifend libero eget, viverra accumsan ante. Phasellus in nisl massa. Proin sit amet tortor et ante varius eleifend in eu enim. Fusce nisi magna, aliquam vitae feugiat nec, cursus nec nunc. Sed elit nulla, semper non luctus eu, cursus id libero. Nullam metus nunc, dapibus non est id, ullamcorper porttitor purus. Nunc bibendum turpis nec risus fermentum iaculis. Quisque aliquet at nunc quis faucibus. Ut commodo volutpat dolor ac ornare. Ut sed ante magna. Praesent ac nisl tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed nec justo erat. Suspendisse vehicula sollicitudin sem non tristique. Fusce ex ante, pretium at cursus vitae, accumsan non ante. Ut dapibus purus eu porta faucibus. Curabitur eu lectus sed enim mattis finibus. Suspendisse risus leo, efficitur a erat ut, dignissim pharetra arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin lobortis aliquet dictum. Donec non pellentesque sem, a tincidunt metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce consequat lacinia magna id convallis.', STR_TO_DATE("May 10 2023", "%M %d %Y"));




CREATE TABLE CATEGORY_BRAND (
    category_id INT NOT NULL,
	brand_id INT NOT NULL,
	FOREIGN KEY (category_id) REFERENCES Category(category_id),
	FOREIGN KEY (brand_id) REFERENCES Brand(brand_id)
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
	FOREIGN KEY (category_id) REFERENCES Category(category_id),
	FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

INSERT INTO CATEGORY_PRODUCT(CATEGORY_id, PRODUCT_id) values (15,28);