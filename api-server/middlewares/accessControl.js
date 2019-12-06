const getToken = require('../helpers/getToken');
const buildMeta = require('../helpers/buildMeta');
const decodeToken = require('../helpers/decodeToken');
const defaultErrors = require('../helpers//defaultErrors');

/**
 * @function
 * @name accessControl
 * @description Middleware function for access control
 * @param {object} req request express object 
 * @param {object} res responce express object
 * @param {Function} next next function
 * @export
 * @async
 */
async function accessControl(req, res, next) {
    const token = getToken(req);
    // Задаём белый спискок маршрутов (роутов), которые не учавствуют в проверке (по
    // умолчанию задат только health)
    const whiteList = ['health'];
    // Получаем url апроса
    const url = req.originalUrl;

    let inWhiteList = false;

    whiteList.forEach(whiteUrl => {
        if (url.indexOf(whiteUrl) !== -1) {
            inWhiteList = true;
        }
    });

    const meta = buildMeta(req);
    
    // Проверяем токен и является ли URL частью белого списка
    if (inWhiteList) {
        next();
    } else {
        if (token) {
            try {
                await decodeToken(token);
                next();
            } catch (error) {
                defaultErrors(res, 'WRONG_TOKEN', meta);                
            }
        } else {
            defaultErrors(res, 'NOT_AUTH', meta);
        }
    }
}

module.exports = accessControl;