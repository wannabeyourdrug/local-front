// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const User = require('../../models/User');

/**
 * @function
 * @name getUserList
 * @description Метод, который возвращает список тегов. Поддерживает сортировку и пагинацию
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns
 * @exports 
 */
async function getUserList(req, res) {
    // TODO: требуется реализовать хелппер, аналогичный тому, что используется для получения
    // списка тегов
}

module.exports = getUserList;