const express = require('express');
const router = express.Router();
const characterModel = require('../models/characterModel');

router.get('/all', (req, res) => {
    characterModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.get('/all/:id', (req, res) => {

    const {id} = req.params;

    characterModel.findOne({ _id: id })
        .then(character => {
            res.send(character);
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {title, year, img, pages, description, isbn} = req.body;

    const newCharacter = new characterModel({
        title, year, img, pages, description, isbn
    })

    newCharacter.save()
      .then(character => {
      res.send(character)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;