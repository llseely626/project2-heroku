const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const toysSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    img: String,
    description: String,
    contact: String
})

const Toy = mongoose.model('Toy', toysSchema)
module.exports = Toy