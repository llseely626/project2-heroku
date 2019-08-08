//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/dogtoysdb'


//Port
//Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;



// Connect to Mongo
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
}, () => {
    console.log('connected to mongo database')
});

//Controllers
// require our toys_Controller
const toysController = require('./controllers/toys_Controllers')


// Middleware
// app.use our required toys controller for routes starting with '/toys'
app.use(express.urlencoded({
    extended: false
}))
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.static('public'))
app.use('/toys', toysController)



//localhost:3000
app.get('/', (req, res) => {
    res.send('app is running!')
})

//Listener
//___________________
app.listen(PORT, () => console.log('Listening on port:', PORT));