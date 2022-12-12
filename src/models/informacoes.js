const mongoose = require('mongoose')

const Schema = mongoose.Schema

const partidas = new Schema
(
    {
        grupo: String,
        data: String,
        hora: String,
        time: String,
        adversario: String
    },
    {
        collection: 'informacoes'
    }
)

module.exports = {Partidas: partidas}