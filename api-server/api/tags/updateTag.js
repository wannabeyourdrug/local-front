// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html

const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const Tag = require('../../models//Tag');

/**
 * @function
 * @name updateTag
 * @description Функция, которая обновляет тег
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function updateTag(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем данные из тела запроса
    const id = (req.hasOwnProperty('body') && req.body.hasOwnProperty('id')) 
        ? req.body.id 
        : undefined;
    const text = (req.hasOwnProperty('body') && req.body.hasOwnProperty('text')) 
        ? req.body.id 
        : undefined; 
    const removed = false;

    // Пытаемся найти тег. Если тег находим - обновляем.
    // Обратываем ошибки
    try {
        // Собираем фильтр для поиска
        const filter = { _id: id, removed };
        // Получаем тег из БД
        // Если тег найден - обновляем данные, сохраняем в БД и возвращаем результат.
        // Если тег не найден - возвращаем ошибку
        const tag = await Tag.findOne(filter);
        if (tag) {
            // Обновляем поле в записи
            tag.text = text;
            // Сохраняем в БД
            await tag.save();
            answerBuilder(res, tag, undefined, meta);
        } else {
            defaultErrors(res, 'NOT_FOUD', meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = updateTag;