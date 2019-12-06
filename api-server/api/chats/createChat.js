// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const getToken = require('../../helpers/getToken');
const answerBuilder = require('../../helpers/answerBuilder');
const decodeToken = require('../../helpers/decodeToken');
const Chat = require('../../models/Chat');

/**
 * @function
 * @name createChat
 * @description Функция, которая создаёт чат
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function createChat(req, res) {
    // Собирает объект с мета-данными
    const meta = buildMeta(req);
    // Получаем токен из запроса
    const token = getToken(req);
    // Выделяем данные из запроса
    const name = (req.hasOwnProperty('body') && req.body.hasOwnProperty('name'))
        ? req.body.name
        : `чат от ${(new Date).toLocaleTimeString()}`;
    const description = (req.hasOwnProperty('body') && req.body.hasOwnProperty('description')) 
        ? req.body.description 
        : '';
    // Создаем объект чата и возвращаем результат
    // (удачно созданный чат или ошибку)
    try {
        const user = await decodeToken(token);
        const { _id } = user;
        const author = _id;
        const chat = { name, description, author };
        const newChat = new Chat(chat);
        await newChat.save();
        answerBuilder(res, newChat, undefined, meta);
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = createChat;