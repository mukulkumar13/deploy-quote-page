const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
    author:{
        type : String,
        trim : true,
        // required : true
    },
    desc:{
        type : String,
        trim : true,
        // required : true
    }
})
const Quote = mongoose.model('Quote' , quoteSchema);
module.exports = Quote;