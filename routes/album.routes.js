// routes/album.routes.js

const express = require('express');
const router = express.Router();
const Album = require('../models/Album.model.js');
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");

// GET route to display the form to create a new album
router.get("/albums/create", isLoggedIn, (req, res) =>
  res.render("albums/album-create.hbs")
);

router.post('/albums/create', (req, res, next) => {
    const { title, artist, label, genre, tracks } = req.body;
    Album.create({ title, artist, label, genre, tracks })
    .then(() => res.redirect('/albums/create'))
    .catch(error => next(error));
});
   
// GET route to retrieve and display all the albums

router.get("/albums", (req, res, next) => {
  Album.find()
    .then((allTheAlbumsFromDB) => {
    
      // -> allTheAlbumsFromDB is a placeholder, it can be any word
      console.log("Retrieved albums from DB:", allTheAlbumsFromDB);

      res.render("albums/album-list.hbs", { albums: allTheAlbumsFromDB });
    })
    .catch((error) => {
      console.log(`Error while getting the albums from the DB: ', ${error}`);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

  router.get('/albums/:albumId', (req, res, next) => {
    const { albumId } = req.params;
   
    Album.findById(albumId)
      .then(theAlbum => res.render('albums/album-details.hbs', { album: theAlbum }))
      .catch(error => {
        console.log('Error while retrieving album details: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  router.get("/albums/:albumId/edit", isLoggedIn, (req, res, next) => {
    const { albumId } = req.params;

    Album.findById(albumId)
      .then((albumToEdit) => {
        // console.log(albumToEdit);
        res.render("albums/album-edit.hbs", { album: albumToEdit }); // <-- add this line
      })
      .catch((error) => next(error));
  });

  router.post('/albums/:albumId/edit', (req, res, next) => {
    const { albumId } = req.params;
    const { title, artist, label, genre } = req.body;
   
    Album.findByIdAndUpdate(albumId, { title, artist, label, genre }, { new: true })
      .then(updatedAlbum => res.redirect(`/albums/${updatedAlbum.id}`)) // go to the details page to see the updates
      .catch(error => next(error));
  });


  router.post("/albums/:albumId/delete", isLoggedIn, (req, res, next) => {
    const { albumId } = req.params;

    Album.findByIdAndDelete(albumId)
      .then(() => res.redirect("/albums"))
      .catch((error) => next(error));
  });

module.exports = router;