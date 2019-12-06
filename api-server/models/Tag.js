const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;


const schema = new Schema({
    text: String,
    removed: {
        type: Types.Boolean,
        default: true
    }
}); 

module.exports = mongoose.model('Tag', schema);
