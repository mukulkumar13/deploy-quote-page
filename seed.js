const mongoose = require('mongoose');

const Quote = require('./models/Quote');


const quotes = [
    {
        author:"mukul",
        desc:"hello guyz whats up welcome"
    },
    {
        author:"mukul",
        desc:"hello guyz whats up welcome"
    },
    {
        author:"mukul",
        desc:"hello guyz whats up welcome"
    },
    {
        author:"mukul",
        desc:"hello guyz whats up welcome"
    },
    {
        author:"mukul",
        desc:"hello guyz whats up welcome"
    }
]

async function seedDB(){
    await Quote.insertMany(quotes);
    console.log("Data seeded successfully")
}

module.exports = seedDB;