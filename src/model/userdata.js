//Accessing Mongoose package
const mongoose = require('mongoose');

//database connection
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.set('useFindAndModify',false);

//schema defenition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String
    
});

//model creation
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;