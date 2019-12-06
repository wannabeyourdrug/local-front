// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const buildMeta = require('../../helpers/buildMeta');
const createToken = require('../../helpers/createToken');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const User = require('../../models/User');

/**
 * @function
 * @name login
 * @description Функция, реализующая авторизация или регистрацию пользователя
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
async function login(req, res) {
    // Получаем тело запроса
    const {
        username,
        action,
        password,
        sbisToken
    } = req.body || {};
    
    // Получаем объект мета-данных
    const meta = buildMeta(req);
    
    meta.sbisToken = sbisToken;
    
    if (sbisToken) {
        switch (action) { 
            case 'login':
                if (username && password) {
                    const user = await User.findOne({
                        username,
                        password
                    });
                    
                    if (user) {
                        const token = createToken(user);
    
                        answerBuilder(res, token, undefined, meta);
                    } else {
                        defaultErrors(res, 'USER_NOT_FOUND', meta);
                    }
                } else {
                    defaultErrors(res, 'NOT_AUTH_DATA', meta);
                }
                break;
            case 'register':
                if (username && password) {
                    const user = await User.findOne({
                        username,
                        password
                    });

                    if (!user) {
                        const newUser = new User({
                            username,
                            password
                        });
                        await newUser.save();
                        const token = createToken(newUser);

                        answerBuilder(res, token, undefined, meta);
                    } else {
                        defaultErrors(res, 'ALREADY_REGISTER', meta);
                    }
                } else {
                    defaultErrors(res, 'NOT_REGISTER_DATA', meta);
                }
                break;
            default:
                // Обрабатываем, что фронт дал действие, которое не существует.
                defaultErrors(res, undefined, meta);
                break;
        }
    } else {
        // Если не был передан токен СБИС - просто выкидываем ошибку
        defaultErrors(res, 'NOT_AUTH', meta);
    }
}

module.exports = login;