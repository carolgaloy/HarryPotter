const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use('/books', require('./routes/books'));
app.use('/houses', require('./routes/houses'));
app.use('/horcruxes', require('./routes/horcruxes'));
app.use('/spells', require('./routes/spells'));

app.listen(port, () => {
    console.log("Server is running on port", port);
});