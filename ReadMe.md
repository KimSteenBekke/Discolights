# **DiscoLights**

## **Description of the project:**

DiscoLights is a database that lets you store your records (albums). You can get a list of existing albums without signing in. But to create, edit or delete albums, you must be registered and signed in.

## **Wireframes:**

Wireframes are developed with Marvelapp and the prototype can be run from here: 

https://marvelapp.com/prototype/hh50i74

## **User Stories:**

1.	User Sign up
    -User must be able to sign up at the "Log in"-screen
    -User must provide a username
    -User must provide a password
    -Username must be validated
    -Password must be encrypted
    -User must return to "Home"-screen upon sign up

2.	User Login
    -User must be able to access login via the "Log in"-button
    -User must be able to login with username & password at the "Log in"-screen
    -User name must be validated
    -Password must be validated
    -User must return to "Home"-screen upon login

3.	User Logout
    -User must be able to logout pressing the "Log out"-button
    -User must return to "Home"-screen upon logout
    -User must be logged in to perform actions under feature 3

4.	Album Create
    -User must be able to access create album via the "Create album"-button
    -User must be able to create a new album at the "Create album"-screen
    -The following fields must be available during registration:
        -Title
        -Artist
        -Label
        -Genre
        -Track sequence
        -Track title
        -Track time
    -User must be logged in to perform actions under feature 4

5.	Album List
    -User must be able to list albums via the "List of albums"-button
    -User must be able to see the following album information:
        -Title 
        -Artist
        -Label
        -Genre
    -User must be able to perform the following actions:
        -Details - go to Album details
        -Edit - go to Edit album
        -Delete - delete the album
    -User can perform actions under feature 5 without being logged in, except "Edit" and "Delete"

6.	Album Details
     -User must be able to go to "Album details" from the "List of albums"-screen
     -User must be able to see the following album information:
        -Title
        -Artist
        -Label
        -Genre
    -User can perform actions under feature 6 without being logged

7.	Album Edit
    -User must be able to go to "Edit album" from the "List of albums"-screen
    -User must be able to edit the following album information:
        -Title
        -Artist
        -Label
        -Genre
    -User must be logged in to perform actions under feature 7

8.	Album Delete
    -User must be able to delete the album from the "List of albums"-screen
    -User must be logged in to perform actions under feature 8

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