# Dancewear


Tech stack:

* Spring Boot
* MySQL
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
* Category
* Basket

## Controllers
* Review 
* User
* Order
* Brand
* Product
* Basket
* Category

## Services
* Review
* User
* Order
* Brand
* Product
* Basket
* Category




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

### Modal

### Carousel 

### Quiz

### Reviews    SingleReview     SubmitReview

### Cards  SingleCard

### Chatbot

### Pagination 

### Cookies

### Privacy Policy

### Careers

### Delivery

### Terms and Conditions


### Modal - to display more information e.g. product 


### Pagination


### Accordion 

### Filter

### Banner



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
* Password set upon installation must be used when connecting to MySQL server using the command line or Workbench
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

Queries can be pasted into MySQL workbench and executed in one fell swoop

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


### Brands

id 1 'Katz
id 2 Pineapple
id 3 Bloch
id 4 Capezio
id 5 1st Position
id 6 Ballet Rosa
id 7 Little Ballerina
id 8 Revolution

### Categories

id 1 'Tutus'
id 2 'Tap shoes
id 3 'Bags'
id 4 'Accessories'
id 5  'Gymnastics wear'
id 6 'Costumes'
id 7 Character shoes
id 8 Ballet shoes
id 9 Pointe shoes
id 10 Dance trainers
id 11 Jazz shoes
id 12 Leotards
id 13 Tops
id 14 Trousers
id 15 Casual


# Points to consider

* How to store images in the database
* Should I use a CSS framework to make styling easier e.g. Tailwind, React Bootstrap
* Accessibility 
* Testing - unit tests with Jest and e2e test with Cypress
* Security
* Reusability of code
* Performance 
* Wireframes - use drawio
* Use case diagrams
* User stories
* Use SCSS instead of CSS
* Incorporate TypeScript into React - .tsx files instead of js
* Make it a PWA - progressive web app
* Code splitting
* Image optimization
* Authentication - how to do this  - stateful or stateless authentication. Currently have no knowledge of JWT - useful to learn
* Filtering - use named queries on the backend
* Improve knowledge of working with session storage and local storage through some other features

# User Stories

* As an unregistered user
so that I can decide whether to sign up or not
I can view all products on the website

* As a registered user
so that I can buy products
I can add items to my basket

* As a registered user
so that no one can buy items on my behalf
I can only log in with the correct credentials

* As a registered user
so as to reduce the risk of data theft
my password is hashed

* As a registered user
so that I can keep track of what I want to buy
I can view items in my basket

* As a registered user
so that I can not overspend
I can delete items from my basket

* As someone who is interested in dance
so that I can read about interesting topics and news in the dance world
I can view blog posts

* As a registered user
so that I can provide feedback
I can write reviews

* As a registered or non-registered user
so that I can judge whether to buy a product or not
I can read reviews

* As a registered user
so that I can provide feedback about products
I can give a rating out of five (stars)

* As someone who is interested in dance
so that I can procrastinate when I shouldn't be
I can take a quiz

* As a registered or non-registered user
so that I can get answers quickly to my questions
I can chat with a bot