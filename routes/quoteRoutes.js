const express = require('express');
const Quote = require('../models/Quote');

const router = express.Router() 



// displaying all the quotes
router.get('/quotes' , async(req,res)=>{
    let quotes = await Quote.find({}); 
    res.render('quotes/index' , {quotes});
})


// adding a form for new quote
router.get('/quotes/new' , (req,res)=>{
    res.render('quotes/new')
})

// actually adding quote in the DB
router.post('/quotes' , async(req,res)=>{
    let {author , desc } = req.body; 
    await Quote.create({author , desc});
    res.redirect('/quotes');
})

// for showing details of particular quote
router.get('/quotes/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundQuote = await Quote.findById(id);
    res.render('quotes/show' , {foundQuote})
})
module.exports = router;