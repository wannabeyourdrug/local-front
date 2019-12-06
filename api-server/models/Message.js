const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

// TODO: требуется дописать модель. Наполнить её свойствами
// 0. Автор, строка
// 1. Текст, строка
// 2. Индефикатор чата
// 3. Дата создания, формат: { type: Types.Date, default: Date.now }
// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
const schema = new Schema({});

module.exports = mongoose.model('Message', schema);
