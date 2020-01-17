const express = require('express');
const router = express.Router();
const spellModel = require('../models/spellModel');

router.get('/all', (req, res) => {
    spellModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => res.send(err));
});

router.get('/all/:id', (req, res) => {

    const {id} = req.params;

    spellModel.findOne({ _id: id })
        .then(spell => {
            res.send(spell);
        })
        .catch(err => res.send(err));
});

router.get('/type/:type', (req, res) => {

    const {type} = req.params;

    spellModel.find({ type: type })
        .then(spells => {
            res.send(spells);
        })
        .catch(err => res.send(err));
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