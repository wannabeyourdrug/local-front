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

    const {
        id
    } = req.params || {};

    const {
        profile,
        tags,
        scores
    } = req.params || {};

    const token = getToken(req);

    try {
        // Декодируем токен, чтобы проверить совпадает ли ID зашитый в токен
        // и ИД пользователя, переданный в строке
        const user = await decodeToken(token);
        
        if (user._id === id) {
            let findedUser = await User.findOne({
                _id: id
            });

            if (findedUser) {
                findedUser.profile = profile;
                findedUser.tags = tags;
                findedUser.scores = scores;
                findedUser.save();
                answerBuilder(res, findedUser, undefined, meta);
            } else {
                defaultErrors(res, 'USER_NOT_FOUND', meta);
            }
        } else {
            defaultErrors(res, 'ACCESS_DENIED', meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = updateUser;