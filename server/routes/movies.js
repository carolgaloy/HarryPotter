const express = require('express');
const router = express.Router();
const movieModel = require('../models/movieModel');

router.get('/all', (req, res) => {
    movieModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.get('/all/:id', (req, res) => {

    const {id} = req.params;

    movieModel.findOne({ _id: id })
        .then(movie => {
            res.send(movie);
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {title, year, img, duration, description, imdb, director, soundtrack} = req.body;

    const newMovie = new movieModel({
        title, year, img, duration, description, imdb, director, soundtrack
    })

    newMovie.save()
      .then(movie => {
      res.send(movie)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;