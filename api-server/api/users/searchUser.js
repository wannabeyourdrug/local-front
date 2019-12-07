const buildMeta = require('../../helpers/buildMeta');
const getToken = require('../../helpers/getToken');
const decodeToken = require('../../helpers/decodeToken');
const answerBuilder = require('../../helpers/answerBuilder');
const defaultErrors = require('../../helpers/defaultErrors');
const User = require('../../models/User');

/**
 * @function
 * @name searchUser
 * @description Функция обновляет данные о пользователе
 * @param {object} req объект запроса 
 * @param {object} res объект ответа
 * @returns
 * @exports 
 */
async function searchUser(req, res) {
    // Собираем стандартный объект мета-данных
    const meta = buildMeta(req);

    const {
        tags
    } = req.body || {};

    const token = getToken(req);
    
    console.log("Got in");

    try {
        const user = await decodeToken(token);

        let users = await User.find({
            _id: {
                $ne: user._id
            },
            tags: {
                $all: tags
            }
        });
        console.log("Got in 2");
        if (users) {
            answerBuilder(res, users, undefined, meta);
        } else {
            defaultErrors(res, 'USER_NOT_FOUND', meta);
        }
    } catch (error) {
        answerBuilder(res, undefined, error, meta, 502);
    }
}

module.exports = searchUser;