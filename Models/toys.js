const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toysSchema = new Schema({
    name: String,
    img: String,
    description: String,
    contact: String
})

applicationCache.get('toys/seed', req, res) => {
    toysSchema.create([{
        name: ''
    }])
}