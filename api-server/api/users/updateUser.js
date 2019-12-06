// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const getToken = require('../../helpers/getToken');
const decodeToken = require('../../helpers/decodeToken');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const User = require('../../models/User');

/**
 * @function
 * @name updateUser
 * @description Функция обновляет данные о пользователе
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns
 * @exports 
 */
async function updateUser(req, res) {
    
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);
    // Получаем индефикатор пользователя из адресной строки (через params)
    const id = (req.hasOwnProperty('params') && req.params.hasOwnProperty('id')) 
        ? req.params.id
        : undefined;
    // Получаем данные из тела запроса (те, которые были в модели)
    // ДЛЯ ПРИМЕРА:
    // const profile = (req.hasOwnProperty('body') && req.body.hasOwnProperty('profile'))
    //    ? req.body.profile
    //    : undefined;
    // const tags = (req.hasOwnProperty('body') && req.body.hasOwnProperty('tags'))
    //    ? req.body.tags
    //    : undefined;
    // const scores = (req.hasOwnProperty('body') && req.body.hasOwnProperty('scores'))
    //    ? req.body.scores
    //    : undefined;
    // Получаем токен из запроса
    const token = getToken(req);

    try {
        // Декодируем токен, чтобы проверить совпадает ли ID зашитый в токен
        // и ИД пользователя, переданный в строке
        const user = await decodeToken(token);
        
        // Собираем фильтр для поиска. Сраниваем параметр строки и id в токене
        const filter;

        // Ищем пользтвателя
        const findedUser;

        // TODO: Если пользователь найден - обновляем его данные и возвращаем ответ.
        // TODO: Если пользователь не найден - возвращаем стандартную ошибку
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = updateUser;