const mongoose = require('mongoose');

const UrlSchema= new mongoose.Schema({
    link:String,
    short:String,
});


module.exports= mongoose.model('Url',UrlSchema)