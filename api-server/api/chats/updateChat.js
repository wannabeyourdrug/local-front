// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const getToken = require('../../helpers/getToken');
const decodeToken = require('../../helpers/decodeToken');
const defaultErrors = require('../../helpers/defaultErrors');
const answerBuilder = require('../../helpers/answerBuilder');
const Chat = require('../../models/Chat');

/**
 * @function
 * @name updateChat
 * @description Метод обновления информации о чате
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports
 */
async function updateChat(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные из запроса
    const id = (req.hasOwnProperty('params') && req.params.hasOwnProperty('id')) 
        ? req.params.id
        : undefined;
    const name = (req.hasOwnProperty('body') && req.body.hasOwnProperty('name'))
        ? req.body.name
        : `чат от ${(new Date).toLocaleTimeString()}`;
    const description = (req.hasOwnProperty('body') && req.body.hasOwnProperty('description')) 
        ? req.body.description 
        : '';
    const token = getToken(req);
    // Пытаемся обновить данные чата. 
    // Получаем чат, обновляем данные и созраняем. Возвращаем ответ
    // об удачном сохранении.
    // Либо возвращаем ошибку
    try {
        const user = await decodeToken(token); 
        const filter = { _id: id, author: user._id };
        const chat = await Chat.findOne(filter);

        if (chat) {
            chat.name = name;
            chat.description = description;
            await chat.save();
            answerBuilder(res, chat, undefined, meta);
        } else {
            defaultErrors(res, 'NOT_FOUD', meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = updateChat;