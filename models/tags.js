const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    tag: String,
    category: String
}) 

module.exports = mongoose.model('Tag', tagSchema);