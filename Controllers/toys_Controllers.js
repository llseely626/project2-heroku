//Dependencies
const express = require('express')
const toys = express.Router()

//toys index
toys.get('/', (req, res) => {
    res.render('index.ejs')
})



module.exports = toys