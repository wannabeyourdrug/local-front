// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html

const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const Tag = require('../../models/Tag');

/**
 * @function
 * @name createTag
 * @description Функция, которая создаёт тег в БД
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function createTag(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные из тела запроса
    const text = (req.hasOwnProperty('body') && req.body.hasOwnProperty('text'))
        ? req.body.text 
        : `тег_${(new Date).toLocaleTimeString()}`;
    const removed = false;
    // Собираем объект фильтров
    const filter = { text, removed };
    // Получаем тег из БД или возвращаем ошибку
    try {
        // Получаем тег из БД по фильтрам
        // Про операцию findOne можно почитать по ссылке: https://mongoosejs.com/docs/api.html#model_Model.findOne
        const tag = await Tag.findOne(filter);
        // Проверяем, найден ли тег с заданными фильтрам. Если тег найден
        // возвращаем его.
        // Если тег не найден - создаем его и возвращаем.
        if (tag) {
            answerBuilder(res, tag, undefined, meta);
        } else {
            const newTag = { text, removed };
            const createdTag = new Tag(newTag);
            await createdTag.save();
            answerBuilder(res, createdTag, undefined, meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = createTag;