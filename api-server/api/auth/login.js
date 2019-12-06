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
        sbisToken
    } = req.body || {};
    
    // Получаем объект мета-данных
    const meta = buildMeta(req);
    
    meta.sbisToken = sbisToken;
    
    if (sbisToken) {
        try {
            switch (action) { 
                case 'login':
                    if (username) {
                        const user = await User.findOne({
                            username
                        });
                        
                        if (user) {
                            const token = await createToken(user);
                            meta.token = token;
        
                            answerBuilder(res, user, undefined, meta);
                        } else {
                            defaultErrors(res, 'USER_NOT_FOUND', meta);
                        }
                    } else {
                        defaultErrors(res, 'NOT_AUTH_DATA', meta);
                    }
                    break;
                case 'register':
                    if (username) {
                        const user = await User.findOne({
                            username
                        });
    
                        if (!user) {
                            const newUser = new User({
                                username
                            });
                            await newUser.save();
                            const token = await createToken(newUser);
                            meta.token = token;
    
                            answerBuilder(res, newUser, undefined, meta);
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
        } catch (error) {
            answerBuilder(res, undefined, error, meta);
        }
    } else {
        // Если не был передан токен СБИС - просто выкидываем ошибку
        defaultErrors(res, 'NOT_AUTH', meta);
    }
}

module.exports = login;