//Accessing Mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true });

//schema defenition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;