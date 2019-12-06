// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const getToken = require('../../helpers/getToken');
const decodeToken = require('../../helpers/decodeToken');
const Message = require('../../models/Message');

/**
 * @function
 * @name createMessage
 * @description Функция, которая создаёт сообщение
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function createMessage(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем тоекн из запроса
    const token = getToken(req);
    // TODO: Получаем текст из тела запроса данные для создания нового сообщения
    // Сообщение обязательно должо быть связано с чатом
    //
    // ПРИМЕР:
    // const text = (req.hasOwnProperty('body') && req.body.hasOwnProperty('text'))
    //    ? req.body.text
    //    : '';
    // Получаем индефикатор чата из тела запроса
    // const chatId = (req.hasOwnProperty('body') && req.body.hasOwnProperty('chatId'))
    //    ? req.body.chatId
    //    : undefined;
    
    // TODO: реализуем создание сообщения. Одним из параметров сообщения должен быть
    // автор. Следовательно надо декодировать токен.
    try {
        // Декодируем токен пользователя
        const user = await decodeToken(token);
    } catch (error) {
        // ВОзвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = createMessage;