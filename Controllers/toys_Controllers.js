//Dependencies
const express = require('express')
const toys = express.Router()

const Toy = require('../Models/toys')







toys.get('/seed', async (req, res) => {
    const newToy = [


        {
            name: 'Kong Classic Dog Toy',
            img: 'https://petco.scene7.com/is/image/PETCO/44431-center-1?$ProductDetail-large$',
            description: 'Classic red rubber chew toy',
            contact: 'Anna: 203-555-6731'
        },
        {
            name: 'Burrow Squeaky Hide & Seek Plush Toy',
            img: 'https://img.chewy.com/is/catalog/104282_MAIN._AC_SL1500_V1471525128_.jpg',
            description: 'Plush toy with squirells for dog to sniff out and fetch',
            contact: 'Paul: 917-555-1286'
        },
        {
            name: 'Hol-EE Roller',
            img: 'https://petco.scene7.com/is/image/PETCO/1453874-center-1',
            description: 'Durable, bouncing toy',
            contact: 'Will: 203-555-8999'
        },
        {
            name: 'Chuckit! Ultra Ball',
            img: 'https://petco.scene7.com/is/image/PETCO/2967346-center-2?$ProductDetail-large$',
            description: 'High-bounce, high-visibility, high-durability ball',
            contact: 'Marcus: 347-555-8904'
        }

    ]
    try {
        const seedItems = await Toy.create(newToy)
        res.send(seedItems)
    } catch (err) {
        res.send(err.message)
    }

});


//index route
toys.get('/', (req, res) => {
    Toy.find({}, (err, allToy) => {
        res.render('index.ejs', {
            allToy: allToy
        })
    })
})

//new route
toys.get('/new', (req, res) => {
    res.render('new.ejs')
})

//show route

toys.get('/:id', (req, res) => {
    Toy.findById(req.params.id, (err, foundToy) => {
        res.render('show.ejs', {
            toyID: foundToy
        })
    })
})

//edit route
toys.get('/:id/edit', (req, res) => {
    Toy.findById(req.params.id, (err, foundToy) => {
        res.render('edit.ejs', {
            toyID: foundToy
        })
    })
})

//create route
toys.post('/', (req, res) => {
    console.log('help')
    console.log(req.body)
    Toy.create(req.body, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/toys')
        }
    })
})

//Update route
toys.put('/:id', (req, res) => {
    Toy.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedToy) => {
        if (err) {
            console.log(err)
        }
        res.redirect(`/toys/${req.params.id}`)
    })
})

//Delete route
toys.delete('/:id', (req, res) => {
    Toy.findByIdAndRemove(req.params.id, (err, deletedToy) => {
        if (err) {
            console.log(err)
        } else {
            console.log('removed', deletedToy)
            res.redirect('/toys')
        }
    })
})





module.exports = toys;