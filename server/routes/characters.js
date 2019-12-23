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

    const {name, gender, img, family, school, house, role, pet, dateOfBirth, dateOfDeath, specie, patronus, boggart, wand, 
        deathEater, dumbledoresArmy, ministryOfMagic, aliases, firstIntroduced, playedBy} = req.body;

    const newCharacter = new characterModel({
        name, gender, img, family, school, house, role, pet, dateOfBirth, dateOfDeath, specie, patronus, boggart, wand, 
        deathEater, dumbledoresArmy, ministryOfMagic, aliases, firstIntroduced, playedBy
    })

    newCharacter.save()
      .then(character => {
      res.send(character)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;