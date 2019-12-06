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

    // ПРИМЕР:
     const text = (req.hasOwnProperty('body') && req.body.hasOwnProperty('text'))
        ? req.body.text
        : '';
    // Получаем индефикатор чата из тела запроса
     const name = (req.hasOwnProperty('body') && req.body.hasOwnProperty('name'))
        ? req.body.name
        : undefined;

    
    meta.token = token;

    try {
        // Декодируем токен пользователя
        const user = await decodeToken(token);
        const { _id } = user;
        const author = _id;
        const message = { author, text, name };
        const newMessage = new Message(message);
        await newMessage.save();
        answerBuilder(res, newMessage, undefined, meta);
    } catch (error) {
        // ВОзвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = createMessage;