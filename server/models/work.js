const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    id: Object,
    role: String,
    company: String,
    startDate: String,
    endDate: String
})

module.exports = mongoose.model('work', workSchema)