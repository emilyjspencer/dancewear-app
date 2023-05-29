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
* Filters = filter by brand, filter by category, filter by size, 
* Sorting - sort by price, sort reverse by price, sort alphabetically


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

Will be quite complex, involving primary keys etc to make associations between different entities e.g. users and reviews,
users and orders, products and brands, products and categories

### One to One relationships:
 * User - Reviews
 * User - Blog
 * User - Basket

### One to Many relationship
 * User - Orders
 * Brands - Products
 * Basket - Product


 ### Many to many relationships:

* Brands - Categories
* Product - Categories


Brands

 id 1 'Katz
id 2 Pineapple
id 3 Bloch
id 4 Capezio
id 5 1st Position
id 6 Ballet Rosa
id 7 Little Ballerina

### Categories

id 1 'Dancewear'
id 2 'Shoes
id 3 'Bags'
id 4 'Accessories'
id 5  'Gymnastics wear'
id 6 'Costumes'

