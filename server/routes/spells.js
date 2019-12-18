const express = require('express');
const router = express.Router();
const spellModel = require('../models/spellModel');

router.get('/all', (req, res) => {
    spellModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {name, spell, pronunciation, type, associated, description} = req.body;

    const newSpell = new spellModel({
        name, spell, pronunciation, type, associated, description
    })

    newSpell.save()
      .then(spell => {
      res.send(spell)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;