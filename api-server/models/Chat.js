const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

// TODO: Требуется доработать модель чата, добавить в неё параметры:
// 0. Автор, строка
// 1. Наименование чата, строка
// 2. Описание чата, строка
// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
const schema = new Schema({});

module.exports = mongoose.model('Chat', schema);
