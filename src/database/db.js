const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/partidas-app')

module.exports = {Mongoose:mongoose}