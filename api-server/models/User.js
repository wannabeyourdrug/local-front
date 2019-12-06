const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;
const Schema = mongoose.Schema;

// TODO: требуется прописать поля модели:
// 0. Имя пользователя. Обязательный параметр
// ПРИМЕР поля с обязательным параметром:
// removed: {
//     type: Types.String,
//     unique: true
// }
// 1. Профиль пользователя (мы не знаем его структуру)
// 2. Теги (объект, который мы не знаем какую структуру будет иметь)
// 3. Очки (на вырост! Если успеем - встроим игры)
// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
const schema = new Schema({});

module.exports = mongoose.model('User', schema);
