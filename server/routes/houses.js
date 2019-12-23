const express = require('express');
const router = express.Router();
const houseModel = require('../models/houseModel');

router.get('/all', (req, res) => {
    houseModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.get('/all/:id', (req, res) => {

    const {id} = req.params;

    houseModel.findOne({ _id: id })
        .then(house => {
            res.send(house);
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {name, founder, head, img, ghost, colors, animal} = req.body;

    const newHouse = new houseModel({
        name, founder, head, img, ghost, colors, animal
    })

    newHouse.save()
      .then(house => {
      res.send(house)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;