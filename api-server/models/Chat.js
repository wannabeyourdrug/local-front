const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const schema = new Schema({
    author: Types.String,
    name: Types.String,
    description: Types.String
});

module.exports = mongoose.model('Chat', schema);
