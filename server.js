//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/DB_dogphotos'


//Port
//Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;



// Connect to Mongo
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}, () => {
    console.log('connected to mongo database')
});

//Routes

//localhost:3000
app.get('/', (req, res) => {
    res.send('app is running!')
})


//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));