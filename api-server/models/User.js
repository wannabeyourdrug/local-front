const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
       type: Types.String,
        unique: true
    },
    profile:{},
    tags:{},
    scores:{},
});

module.exports = mongoose.model('User', schema);
