// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const getToken = require('../../helpers/getToken');
const decodeToken = require('../../helpers/decodeToken');
const defaultErrors = require('../../helpers/defaultErrors');
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

    const {
        text,
        chatId
    } = req.body || {};
    
    try {
        // Декодируем токен пользователя
        const user = await decodeToken(token);

        if (text && chatId) {
            const message = new Message({
                text,
                chatId,
                author: user._id
            });
            answerBuilder(res, message, undefined, meta);
        }
        else {
            defaultErrors(res, 'BAD_DATA', meta);
        }
    } catch (error) {
        // ВОзвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = createMessage;