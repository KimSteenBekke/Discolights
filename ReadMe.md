# **DiscoLights**

## **Description of the project:**

DiscoLights is a database that lets you store your records (albums). You can get a list of existing albums without signing in. But to create, edit or delete albums, you must be registered and signed in.

## **Wireframes:**

Wireframes are developed with Marvelapp and the prototype can be run from here: 

https://marvelapp.com/prototype/hh50i74

## **User Stories:**

1.	User Sign up
    1. User must be able to sign up at the "Log in"-screen
    2. User must provide a username
    3. User must provide a password
    4. Username must be validated
    5. Password must be encrypted
    6. User must return to "Home"-screen upon sign up

2.	User Login
    1. User must be able to access login via the "Log in"-button
    2. User must be able to login with username & password at the "Log in"-screen
    3. User name must be validated
    4. Password must be validated
    5. User must return to "Home"-screen upon login

3.	User Logout
    1. User must be able to logout pressing the "Log out"-button
    2. User must return to "Home"-screen upon logout
    3. User must be logged in to perform actions under feature 3

4.	Album Create
    1. User must be able to access create album via the "Create album"-button
    2. User must be able to create a new album at the "Create album"-screen
    3. The following fields must be available during registration:
       1. Title
       2. Artist
       3. Label
       4. Genre
       5. Track sequence
       6. Track title
       7. Track time
    4. User must be logged in to perform actions under feature 4

5.	Album List
    1. User must be able to list albums via the "List of albums"-button
    2. User must be able to see the following album information:
       1. Title 
       2. Artist
       3. Label
       4. Genre
    3. User must be able to perform the following actions:
       1. Details - go to Album details
       2. Edit - go to Edit album
       3. Delete - delete the album
       4. User can perform actions under feature 5 without being logged in, except "Edit" and "Delete"

6.	Album Details
    1. User must be able to go to "Album details" from the "List of albums"-screen
    2. User must be able to see the following album information:
       1. Title
       2. Artist
       3. Label
       4. Genre
    3. User can perform actions under feature 6 without being logged

7.	Album Edit
    1. User must be able to go to "Edit album" from the "List of albums"-screen
    2. User must be able to edit the following album information:
       1. Title
       2. Artist
       3. Label
       4. Genre
    3. User must be logged in to perform actions under feature 7

8.	Album Delete
    1. User must be able to delete the album from the "List of albums"-screen
    2. User must be logged in to perform actions under feature 8

## **Setup:**

No setup or installation is required to run the app in a browser. 

## **Technologies Used:**

Express.js
Mongoose.js
CSS
Bootstrap
Handlebars

## **Models:**

1.	User.model.js
2.	Album.model.js

## **Server routes table(Method, Route or URL, Description as columns):**

## **Demo(Optional) (Screenshots or GIFs of the application):**

## **Project Link:**

The app is deployed to Heroku and can be accessed from here:

https://discolights.herokuapp.com/

## **Future Work:**

1.	Label model
2.	Genre model
3.	Tracks model
4.	Album Collection by user
5.  Album image upload
6.  Implement Discogs API
7.  Session expire 
8.  Display logged in user name
9.  Sort and filter Album list
10. Search in Album list
11. Tracks in Album details 

## **Team members:**

Peter Ravnsbæk & Kim Steen Bekke

## **Yedi-tricks and mentoring:**

Kim Hansen (LE) & Johny Woller Skovdal