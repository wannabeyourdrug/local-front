// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const Chat = require('../../models/Chat');

/**
 * @function
 * @name getChatsList
 * @description Функция получения списка чатов
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function getChatsList(req, res) {
    // Получаем объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные для пагинации и сортировки
    const limit = (req.query.limit) ? Number(req.query.limit) : 15;
    const skip = (req.query.skip) ? Number(req.query.skip) : 0;
    const filter = (req.query.filter) ? JSON.parse(req.query.filter) : {};
    const sort = (req.query.sort) ? JSON.parse(req.query.sort) : {};
    // Пытаемся получить чаты и их количество
    try {
        // Получаем чаты
        const chats = await Chat.find(filter).sort(sort).limit(limit).skip(skip).exec();
        // Получаем количество чатов
        const count = await Chat.count(filter).exec();
        // Записываем количество в мета-данные
        meta.total = count; 
        // Возвращаем ответ
        answerBuilder(res, chats, undefined, meta);
    } catch (error) {
        // Возвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = getChatsList;