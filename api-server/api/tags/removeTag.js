// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html

const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const Tag = require('../../models/Tag');

/**
 * @function
 * @name removeTag
 * @description Функция удаления тега (помечает тег как удалённый)
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function removeTag(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем индефикатор из тела запроса
    const id = (req.hasOwnProperty('body') && req.body.hasOwnProperty('id')) 
        ? req.body.id 
        : undefined;
    // Задаем значение по умолчанию для свойства "удален"
    const removed = false;
    // Ищем тег и обновляем значение.
    // Обрабатываем ошибкуи
    try {
        // Собираем фильтр для поиска тега
        const filter = { _id: id, removed };
        // Пытаемся найти в БД тег. 
        // Если тег найходим - обновляем данные, сохраняем в БД и возвращаем результат.
        // Если тег не был найден - возвращаем стандатную ошибку
        // Про операцию findOne можно почитать по ссылке: https://mongoosejs.com/docs/api.html#model_Model.findOne
        const tag = await Tag.findOne(filter);
        if (tag) {
            tag.removed = true;
            await tag.save();
            answerBuilder(res, tag, undefined, meta);
        } else {
            defaultError(sres, 'NOT_FOUD', meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = removeTag;