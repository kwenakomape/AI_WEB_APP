
//This class create schema for NRF Data
var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    Surname: String,
    Initials: String,
    Title: String,
    Institution: String,
    Rating: String,
    'Rating Start': String,
    'Rating End': String,
    'Primary Research Fields': String,
    'Secondary Research Fields': String,
    Specialisations: String
    

});

var User = mongoose.model("User", userSchema);

module.exports = User;