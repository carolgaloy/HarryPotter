const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');

router.get('/all', (req, res) => {
    bookModel.find({})
        .then(files => {
            res.send(files)
        }).catch(err => console.log(err));
});

router.get('/all/:id', (req, res) => {

    const {id} = req.params;

    bookModel.findOne({ _id: id })
        .then(book => {
            res.send(book);
        })
        .catch(err => console.log(err));
});

router.post('/', (req, res) => {

    const {title, year, img, pages, description, isbn} = req.body;

    const newBook = new bookModel({
        title, year, img, pages, description, isbn
    })

    newBook.save()
      .then(book => {
      res.send(book)
      })
      .catch(err => {
      res.status(500).send("Server error " + err)});
});

module.exports = router;