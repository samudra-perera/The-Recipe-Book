# The Recipe Book

## Introduction 

The Recipe Book is an application where users can create accounts, create, upload and find recipes. They can choose to make recipes private or upload them to the public recipe feed where other users can search and find them too. Users can add other public recipes to their favourite list for when they wanna make a tasty meal later. The Recipe Book is built using MVC Architecture and 

The majority of this application (a working MVP) was built over 4 days with the help of another developer (Shravan). The application was built collaboratively over replit. We initially had a team of 6, however due to group members having other commintments, only him and I were able to work on and complete the application. 

This project was built using Leon Noel's MVC template. The link to that project can be seen here: https://github.com/100devs/todo-mvc-auth-local.

**Link to project:** https://therecipebook.cyclic.app/

![The Recipe Landing Page](https://res.cloudinary.com/dkrjwbr8w/image/upload/v1673921913/Screen_Shot_2023-01-16_at_9.18.12_PM_zo8wph.png)

## Application Goals

- User login and creation
- Creating, editing and deleting recipes
- Recipe search functionality
- Adding recipes to a list of likes

## Installation

**Packages Used:**

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

Prior to running this project on your machine please do the following in your terminal. 
```
npm install 
npm rebuild bcrypt --build-from-source
```
And add your DB to the .env file like below.
```
DB_STRING = 'insert your mongodb string'
```
To run the application, in your terminal use the following command and go to localhost with the selected port (default to port 2121). 
```
node server
```
 
## How It's Made:

**Tech used:** HTML, CSS, BootStrap, JavaScript, Embedded JavaScript(EJS), NodeJS, ExpressJS, and MongoDB

**Client Side**

The front end of this application is being rendered by the templating language EJS. The EJS is rendered using the database information as inputs. We have used for loops and forEach array methods to iterate through the database responses and render the information to the EJS templates. The front end styling was done using BootStrap and Bootstrap components.

**Server Side**

The server side of the application is built using NodeJS and ExpressJS to handle the routing and MongoDB as the database. The main routes handle all the login and sign up functionality along with handling the authentication for the users. The functionality of the application is handled by the recipes routes and recipes controllers. To reduce the complexity of the project we re-used some code. For example the create recipe ad edit recipe route lead to essentially the same view; the difference being that edit recipe has the form elements pre-populated and a method override. In order to get specific recipe views we passed in the document ID to the URL so we can easily find and access them in the database. 

## Further Optimizations

After completing the project there are some optimization we would do. 

1. Due to the time constraints the styling had to take a back seat to the functionality (Styling Work in Progress)> **UPDATE: Jan 16/23:** All the styling is now completed using Bootstrap and the website looks great!  

2. Giving the search functionality its own routes and controllers to reduce the complexity of the recipes controllers

## Future Consideration

Some additional things I would have liked to add were: 

1. Adding the ability for users to add their own photographs to the recipe. We would have achieved this using cloudinary to store the photographs and multer as the middleware to handle the photo upload.

2. Adding the ability for users to follow each other, creating a "social media" recipe sharing application

3. Using ReactJS as the front-end framework instead of using a templating language like EJS. Breaking apart the application into components would have made it easier to add functionality to specific sections without updating entire views. 


## Lessons Learned:
Building this project taught me a lot about fullstack development and working with another developer from a completely different timezone (Delhi). Here are the following things I learned from building this project. 

1. Creating Schemas to structure the data being passed to the database

2. Working on a different IDE (replit) with another developer in real time

3. Learned how to build an application from the ground up using the MVC software architectures. Including how to use authentication in the application using passportJS.

4. Understood how to query mongoDB databases in a more efficient manner using mongoDB query operators.

5. Since NodeJS does not have a way to handle PUT requests from forms, we used the method override package to modify the POST methods overridden as PUT methods. 

## Contributors

- Shravan KS (https://github.com/devshrav)

## Recent Projects:
Take a look at some of my other portfolio projects:

**Just Journal:** https://github.com/samudra-perera/JustJournal

**To Do List** https://github.com/samudra-perera/To-Do-LIst-CRUD-App

**Portfolio Site** https://github.com/samudra-perera/React-Portfolio-Site/tree/main/portfolio-site


