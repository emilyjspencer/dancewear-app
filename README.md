# Dancewear

An experiment for pod work (code for that project (portal project) obviously won't be available on this GitHub)

Tech stack:

* Spring Boot (with Java)
* MySQL or PostgreSQL
* React
* TypeScript?
* SCSS
* Redux?
* JUnit
* Cypress
* Jest


## Entities

* Review
* User
* Order
* Brand
* Product
* Category?

## Controllers
* Review 
* User
* Order
* Brand
* Product
* Basket
* Category?

## Services
* Review
* User
* Order
* Brand
* Product
* Basket
* Category?




# Brands

* 1st Position
* Bloch
* Capezio
* Pineapple
* Ballet Rosa
* Little Ballerina

# Categories

* Dance Shoes -  ballet shoes character shoes   pointe shoes   jazz shoes  dance trainers  tap shoes  heels
salsa shoes

* Leotards - strappy  long sleeve short sleeve  low back   high neck   unitard   boy shorts leotard

* Gymnastics

* Accessories- bottles  posters  scrunchies  duvet covers  pencil cases

* Dance bags - ballet bag   rucksack   holdall  string bag   shoulder bag 


* Ballroom

* Fitness

* Tights and socks



# Trending

* Dancewear
* Dance shoes
* Costumes
* Brands
* Gymnastics
( as a carousel)



# Components


### Contact 

* Social media links
* Subscribe to newsletter form

### Signup

### Basket 

### Navbar 

### Footer 


### Carousel 

### Quiz

### Reviews    SingleReview     SubmitReview

### Cards  SingleCard

### Chatbot

### Pagination 


# Pages

* Dancewear
* Leotards
* Costumes
* Dance shoes
* Our brands
* All reviews
* Accessories
* Gymnastics
* Quiz page
* Sale
* Login
* Logout
* Signup


## Features

* Chatbot
* Authentication
* Add items to basket
* View basket
* Browse leotards, shoes, tutus, accessories, gymnastics leotards, costumes
* Blog
* Contact with subscribe to newsletter
* Reviews - write a review   See others' reviews


# Running the project

* MySQL needs to be downloaded
* Connect to MySQL via the command line using:
```
mysql -u root -p
```

Enter password

* To view databases on your computer:
```
SHOW DATABASES;
```

* To select a particular database:
```
USE databasename;
```
e.g.

USE dancewear;

* To view all tables in the selected database:
```
SHOW TABLES;
```

* To view data in a particular table:
```
SELECT * FROM tableName;
```
e.g.

SELECT * FROM users;


## Database tables 

Will be quite complex, involving primary keys etc to make associatations between different entities e.g. users and reviews,
users and orders, products and brands, products and categories

