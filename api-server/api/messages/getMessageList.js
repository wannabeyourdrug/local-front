// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const Message = require('../../models/Message');

/**
 * @function
 * @name getMessageList
 * @description Функция возвращает список сообщений
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function getMessageList(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные о пагинации
    const limit = (req.query.limit) ? Number(req.query.limit) : 15;
    const skip = (req.query.skip) ? Number(req.query.skip) : 0;
    const filter = (req.query.filter) ? JSON.parse(req.query.filter) : {};
    const sort = (req.query.sort) ? JSON.parse(req.query.sort) : {};
    // Получаем сообщения и их количество
    try {
        // Получаем список сообщений из БД
        const messages = await Message.find(filter).sort(sort).limit(limit).skip(skip).exec();
        // Получаем общее количество сообщений по фильтру в БД
        const count = await Message.count(filter).exec();
        // Добавляем количество к мета-данным
        meta.total = count; 
        // Возвращаем удачный ответ
        answerBuilder(res, messages, undefined, meta);
    } catch (error) {
        // Возвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = getMessageList;