const express = require('express');
const router = express.Router();
const horcruxModel = require('../models/horcruxModel');

router.get('/all', (req, res) => {
    horcruxModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {name, img, death, deathdate, hiding, destroyedby, destroyedwith, description} = req.body;

    const newHorcrux = new horcruxModel({
        name, img, death, deathdate, hiding, destroyedby, destroyedwith, description
    })

    newHorcrux.save()
      .then(horcrux => {
      res.send(horcrux)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;