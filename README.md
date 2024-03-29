# Dancewear


Tech stack:

* Spring Boot
* Spring Security
* OAuth2 Resource Server
* MySQL
* React
* CSS
* JUnit
* Cypress
* Jest
* Axios
* React Testing Library
* TypeScript?
* Redux?
* SCSS?

# Architecture

* Backend application - is a Spring Boot application
* Frontend application is a React application

* Spring Boot uses Spring Web MVC to export REST Apis
* Spring Boot uses Spring JPA  to interact with the database
* Requests come into the respective controllers. Methods in the request handler for each endpoint will call the respective method in the respective service.
The method in the service will call the respective method in the Repository. The Repository interfaces with the MySQL database.

* The React application sends HTTP Requests to the Spring Boot backend and retrieves HTTP Responses.



## Entities

* Review
* General
* Order
* Brand
* Product
* Category
* Basket
* UserRole

## Controllers
* Review 
* User
* Order
* Brand
* Product
* Basket
* Category
* Authentication


## Services
* Review
* User
* Order
* Brand
* Product
* Basket
* Category
* Authentication

## DTOs

DanceTeacherRegistrationDTO
UserRegistrationDTO
LoginDTO
RegistrationDTO

## Repositories

* GeneralUserRepository
* RoleRepository
* BasketRepository
* BrandRepository
* BlogRepository
* ProductRepository
* CategoryRepository
* ReviewsRepository


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

# Points to consider

* Storage of images in database - blobs, base64 encoding
* Use of CSS framework to faciliate styling
* Accessibility 
* Testing - unit tests with Jest, functional tests with React Testing Library and e2e test with Cypress
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

* As a registered user 
so that I can change my mind about purchases, 
I can update my basket

* As a registered user, 
so that my login details are protected, 
I can log out of my account

* As a user, 
so that I know what is most popular on the website, 
I can see trending items/categories

* As a registered user, 
so that I can keep track of my orders, 
I can see my previous orders

* As a registered user, 
so that I can store a collection of items I liked, 
I can 'like' an item

* As a registered user, 
so that I can keep track of all of the items that I have liked, 
I can see a list of liked items

* As a user, 
so that I can hear about the latest items on the site, 
I can subscribe 

* As a dance teacher, 
so that I can get discounts, 
I can sign up for a dance teacher account

* As a user, 
so that I can refine my search, 
I can filter by brand, category, product

* As a user, 
so that I can see which items are the cheapest, 
I can sort items by price from lowest to highest

* As a user, 
so that I can see which items are the most expensive,
I can sort items by price form highest to lowest

* As a visitor to the website, 
when I visit the homepage, 
I see a cookies banner

* As a registered user
 who has forgotten their password, 
 I can reset my password

* As a visitor to the website, 
so that I can view learn more about the retailer, 
I can see links to their Instagram, Twitter, Tiktok and Facebook accounts

* As a German speaker visiting the website, 
so that I can navigate the site, 
I can view site content in German

* As an admin, so that I can manage customer accounts, 
I can add a user, 
delete a user and edit a user

* As an admin, 
so that I can keep track of customer accounts, 
I can view all users

* As an admin, 
so that I can improve user experience for customers, 
I can add new categories which customers can filter products by

* As an admin, 
so that users can be aware of any new brands,
I can add new brands which customers can filte products by



# CI/CD

* Ad TravisCI



# Authentication

After researching, I've chosen to take the stateless approach. In two previous mini personal projects, I've used session-based authentication (stateful, with cookes).
Since JWT seems to be more common and scales much better, it makes sense to use JWT.



The server will put the data into a JWT and send to the React application.
the React application will save the JWT and send it in every request in the request header.
The spring boot server will validate the JSOn web token and return the response.

JWT is composed of 

* Header - signing algorithm e.g. RSA, HMAC, SH256 
and also specifies the type of token

* Payload - info like userid - contains the claims which are statements about an entity - typically the user and additional data

types of claims - registered, public and private

private claims - custom claims created to share info between parties
public claims - public by nature
registered - set of predefined claims - issuer, auth, expiration time/date etc 

* signature (or more generally, the footer which contains the signature of the json web token). 
is used to verify that the send of the JWT is who they say they are.
The signature will be verified with the Secret key.



# JWT Filter

the first thing that will be executed will be the filter - JWT filter. (authentication filter)

This filter class will extend the OncePerFilterRequest class and has the repsonsibility of checking and validating the JWT token.



There will be an internal check to check whether the JWT token exists or not.

If it doesn't, the Spring boot app will send a not found request back to the React application (403 response).

If there is a JWT token - validation starts

The JWT authentication filter gets the user from the db or tries to retrieve the user db from the database using  user service, which calls the user repository, which interfaces with the database to extract the required user information.

Filter extracts  information such as user email or username (set as the claim or subject token) and uses that to fetch the user from the datbase.


Once user is fetched - validation starts.
if no usesr found - return 403 response.

# JWT Validation mechanism


checks whether a token has expired for not for that user
if the token is still valid - update the Security Context Nolder 0 which is used to store the detials of who is authenticated.
and set the user to be this user.

Then inform the rest of the filter chain that the user is authenticated and update the Authentication Manager

Once the SecurityconextHolder has been updated, it will dispatch the request to the DispatcherServlet and send to the controller.

Return the JWT token and HTTP request with a successful status of 200.




 # PasswordEncoder

 Allows us to store passwords securely  - integrates with the PAsswordEncoder interfaced
 Need to exposre a PasswordEncoder Bean 

# UserDetailsService -
 used by the DaoAuthenticationProvider - for retrieving a username, password and other atributes for authentcating a user





## Roles

I will have 

* USER
* DANCE_TEACHER (dance teacher)
* ADMIN



# Authorization and roles

## Customer roles

* view products
* view accessories
* view reviews
* write reviews
* search products by category
* search for product by brand
* add items to the basket
* enter payment details
* submit an order
* view orders
* if the customer is a dance teacher - a discount is applied to their order

## Admin roles

* Add products
* Add brands
* Add categories
* View users
* Add users, remove users, detail users


# Localization

Will investigate best approach for localization. At minimum English -> German.

# Chatbot

Have so far simply used the read-made package react-simple-chatbot.
Ideally I would like to build one from scratch as we did for our Makers final project - using Python, Django, TFLearn, TensorFlow, React etc 
but most likely will stick to using react-simple-chatbot at least for this project.

# Search and typeaheads

Need to implement search functionality. Have only seen typeaheads in the real world created in Angular using a custom RxJS operator, so requires research


# Modifications

At present, when adding and editing reviews and blog posts - we are selecting a user and a date. 
Once authentication is implemented - the application will know who is logged in and the author information and publishing time will be read from that.


# Testing 

### Java testing

Will use JUnit to unit test the Java code

### React testing

Will use the React Testing Library and Jest.
React Testing library provides a virtual DOM for the tests. 
Jest is the test runner - used to find, run the tests, determines whether the tests pass or fail.
Enzyme will not be used since this project uses React v 18 and Enzyme is not compatible with React v 18

Unit tests will be written for the more complex methods, and methods defined in the services etc

Functional tests will be written for most of the React code.

MockServiceWorker will simulate mock server responses

LCov shows the coverage report - generated when running npm run test:coverage

### E2E tests

Cypress will be used

# Linting and formatting

* ESLint and Prettier
* Requires configuring ESLint for React Testing Library and Jest-Dom 
* Requires configuring ESLint in Visual Studio Code

# Accessibility

* Use of roles
* Avoid use of findByTestId and adding test ids to elements for testing purposes

# Conversion of js files to .jsx files



# Improvements

* Would like to ideally implement a fully reusable Modal that uses the concept of portals - to inject the Modal outside of the typical DOM structure, using the index.js file and hooks to define where to inject the modal.

Common approach in React, not so much in Angular - where content projection tends to be used, unless using third parties such as Angular Material.

* Use TypeScript with React - convert js files to .tsx

* Improve test coverage on the backend and frontend

* Avoid using findByTestId in RTL tests - should ideally be using roles so that the elements can be found in tests in the manner that screen readers can; meaning that the app should be accessible.

* Consider accessibility at all levels

* Implement Cypress tests

* Aim to use Button components (reusable) instead of using button elements over and over again.

* Use ContextAPI for the basket functionality

* Fully implement authorization i.e. unauthenticated users shouldn't see an option to add a new blog post

* Implement email functionality

* Implement username already taken error handling

* Add colour to all error-handling implementations

* Responsive web design: mobile-first approach

* Translations
