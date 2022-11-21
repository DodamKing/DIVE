const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema({
    songId : String,
    title : String,
    artist : String,
    content : String,
    createdAt: {
        type: Date,
        default: Date().toLocaleString()
    },
})

module.exports = mongoose.model('Report', reportSchema)