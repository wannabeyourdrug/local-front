const answerBuilder = require('../../helpers/answerBuilder');

/**
 * @function
 * @name logout
 * @description Функция, реализуюзая логаут пользователя
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns {undefined}
 * @exports 
 */
function logout(req, res) {
    const meta = buildMeta(req);
    meta.message = 'Выход успешно выполнен';
    answerBuilder(res, undefined, undefined, meta);
}

module.exports = logout;