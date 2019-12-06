// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const answerBuilder = require('../../helpers/answerBuilder');
const User = require('../../models/User');

/**
 * @function
 * @name getUserList
 * @description Метод, который возвращает список тегов. Поддерживает сортировку и пагинацию
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns
 * @exports 
 */
async function getUserList(req, res) {
    // TODO: требуется реализовать хелппер, аналогичный тому, что используется для получения
    // списка тегов
	const meta = buildMeta(req);

	const limit = (req.query.limit) ? Number(req.query.limit) : 15;
    const skip = (req.query.skip) ? Number(req.query.skip) : 0;
    const filter = (req.query.filter) ? JSON.parse(req.query.filter) : {};
    const sort = (req.query.sort) ? JSON.parse(req.query.sort) : {};

	try {
		// Получаем список пользователей
        const users = await User.find(filter).sort(sort).limit(limit).skip(skip).exec();
        // Получаем общее количество пользователей
        const count = await User.count(filter).exec();
        // Добавляем общее количество в мета-данные
        meta.total = count; 
        // Возвращаем ответ
        answerBuilder(res, , undefined, meta);
    } catch (error) {
        // Возвращаем ответ с ошибкой
        answerBuilder(res, undefined, error, meta, 502);
    }



}

module.exports = getUserList;