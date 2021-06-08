//Accessing Mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true });


//schema defenition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    language: String,
    genre: String,
    image: String
});

//model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;