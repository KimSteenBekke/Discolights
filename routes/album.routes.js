// routes/album.routes.js

const express = require('express');
const router = express.Router();
const Album = require('../models/Album.model.js');

// GET route to display the form to create a new album
router.get('/albums/create', (req, res) => res.render('album-views/album-create.hbs'));

router.post('/albums/create', (req, res, next) => {
    const { title, artist, label, genre, tracks } = req.body;
    Album.create({ title, artist, label, genre, tracks })
    .then(() => res.redirect('/albums/create'))
    .catch(error => next(error));
  });
   


module.exports = router;