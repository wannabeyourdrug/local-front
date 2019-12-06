// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html

const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const Tag = require('../../models/Tag');

/**
 * @function
 * @name getTagsList
 * @description Функция, которая возвращает пагинированный список тегов
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function getTagsList(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные для пагинации и сортировки из строки запроса
    const limit = (req.query.limit) ? Number(req.query.limit) : 15;
    const skip = (req.query.skip) ? Number(req.query.skip) : 0;
    const filter = (req.query.filter) ? JSON.parse(req.query.filter) : {};
    const sort = (req.query.sort) ? JSON.parse(req.query.sort) : {};
    // Пытаемся получить список тегов и их общее количество
    try {
        // Получаем список тегов
        // Почитать про api поиска, сортировки, пагинации и подсчета количества
        // можно по ссылке: https://mongoosejs.com/docs/api
        const tags = await Tag.find(filter).sort(sort).limit(limit).skip(skip).exec();
        // Получаем общее количество тегов
        const count = await Tag.count(filter).exec();
        // Добавляем общее количество в мета-данные
        meta.total = count; 
        // Возвращаем ответ
        answerBuilder(res, tags, undefined, meta);
    } catch (error) {
        // Возвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = getTagsList;