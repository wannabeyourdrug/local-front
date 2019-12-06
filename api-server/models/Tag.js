const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

// TODO: прописываем поля модели:
// 0. тектс тега
// 1. статус удаленния (признак "удалён"), булево значение, которое
// имеет заданое заране значение.
// ПРИМЕР:
// x: {
//     type: Types.Boolean,
//     default: true
// }
// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
const schema = new Schema({}); 

module.exports = mongoose.model('Tag', schema);
