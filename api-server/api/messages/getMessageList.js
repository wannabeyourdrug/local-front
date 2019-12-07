// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const Message = require('../../models/Message');
const getToken = require('../../helpers/getToken');

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
    const token = getToken(req);

    const {
        userId
    } = req.params || {};

    try {
        const user = await decodeToken(token);
        // Получаем список сообщений из БД
        const messages = await Message.find({
            chatId: {
                $in: [userId, user._id]
            },
            author: {
                $in: [userId, user._id]
            }
        });
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