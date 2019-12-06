/**
 * @function
 * @name getToken
 * @description Функция, которая получает токен из запроса
 * @param {object} req объект запроса
 * @returns {string} строка токена
 * @exports 
 */
function getToken(req) {
    let token;
    // Проверяем есть ли токен в хедере
    // ПРИМЕР:
    // req.header(param_name)
    const hasInHeaders = req.header('Authorization');
    // Проверяем объект req.body на наличие поля с токеном
    // https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    const hasInBody = (req.body.hasOwnProperty('token'));
    // TODO: смотрим где лежит и присваиваем значение или задаём undefined
    return token;
}

module.exports = getToken;