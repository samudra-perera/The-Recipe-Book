# Introduction

A Simple RecipeBook App is built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize the app 



---
> Be sure to add that lovely star 😀 and fork it for your own copy
>
> Create a Recipe
> I was thinking for the updating recipe we have seperate route/view for each of the creation section, instead of the form being on the 

> Add a recipe (Button on homepage that takes you to a seperate view.ejs that is meant for the CRUD portion)
  > 1. Add title
  > 2. add Image (not necessary)
  > 3. Add instructions
  > 4. Add ingredients
  > 5. Option to make the recipe private of public (simple boolean would work here --> isPrivate: False) ... then can search database for all the recipes that aren't false and display those on the public feed
> Update recipe
   - Sends you back to the view.ejs that the user initially used to fill in the recipe and lets the user edit all the necessary fields except the button at the bottom says 'update recipe' instead of 'create recipe.'

> Delete recipe
  >Simple Delete button on recipe cards
>
>
> Comment
> like a recipe
> save to favourites
> tag recipes
>
>
> --Tasks to do
> search for recipes
  >  If user does not have an image we can use the unsplash API to generate an image based on the type of food they are submitting a recipe for (ie pasta)

---

# Objectives

- User login and creation
- Recipe creation and deletion
- Recipe search functionality

---

# Who is this for? 

- It's for beginners & intermediates with little more experience, to help understand the various aspects of building a node app with some complex features

---

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

# Install all the dependencies or node packages used for development via Terminal

`npm install` 

---

# Things to add

- Create a `.env` file and add the following as `key: value` 
  - PORT: 2121 (can be any port example: 3000) 
  - DB_STRING: `your database URI` 
 ---
 
 Have fun testing and improving it! 😎


