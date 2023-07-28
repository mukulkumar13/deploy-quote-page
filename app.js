require('dotenv').config()
const express = require('express');
const app = express(); 
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quoteRoutes = require('./routes/quoteRoutes');
const methodOverride = require('method-override');

mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})



app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public'))); 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



// seedDB();

app.use(quoteRoutes);



const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`)
})