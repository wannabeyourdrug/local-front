// Документация по схемам: https://mongoosejs.com/docs/guide.html
// Документация по моделям: https://mongoosejs.com/docs/models.html
// 
const answerBuilder = require('../../helpers/answerBuilder');

/**
 * @function
 * @name checkHealth
 * @description Функция, возвращает ответ, если сервер работает
 * @param {object} req объект запроса
 * @param {object} res объект ответа
 * @returns
 * @exports
 */
function checkHealth(req, res) {
    const message = 'Health check';
    const meta = { message };
    answerBuilder(res, undefined, undefined, meta);
}

module.exports = checkHealth;