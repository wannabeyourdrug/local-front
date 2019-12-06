const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const schema = new Schema({
    author: Types.String,
    text: Types.String,
    name: Types.String,
    date: { type: Types.Date, default: Date.now }
});

module.exports = mongoose.model('Message', schema);
