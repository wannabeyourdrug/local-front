// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const decodeToken = require('../../helpers/decodeToken');
const getToken = require('../../helpers/getToken');
const Message = require('../../models/Message');

/**
 * @function
 * @name updateMessage
 * @description Функция, которая обновляет сообщение
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function updateMessage(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные из запроса
    const id = (req.hasOwnProperty('params') && req.params.hasOwnProperty('id')) 
        ? req.params.id
        : undefined;
    const text = (req.hasOwnProperty('body') && req.body.hasOwnProperty('text')) 
        ? req.body.text 
        : '';
    // Получаем токен из запроса
    const token = getToken(req);

    try {
        // Декодируем токен
        const user = await decodeToken(token);
        // Собираем объект фильтра 
        const filter = { _id: id, author: user._id };
        // Получается сообщение по фильтру
        const message = await Message.findOne(filter);
        // Если сообщение найдено - обновляем данные и
        // возвращаем удачный ответ.
        // Если сообщение не найдено - возвращаем ошибку.
        if (message) {
            message.text = text;
            await message.save();
            answerBuilder(res, message, undefined, meta);
        } else {
            defaultErrors(res, 'NOT_FOUND', meta);
        }
    } catch (error) {
        // Возвращаем ошибку при сбое
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = updateMessage;