/**
 * @function
 * @name getToken
 * @description Функция, которая получает токен из запроса
 * @param {object} req объект запроса
 * @returns {string} строка токена
 * @exports 
 */
function getToken(req) {
  return req.header('Authorization') || (req.body && req.body.token) || undefined;
}

module.exports = getToken;