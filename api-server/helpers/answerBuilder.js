/**
 * @function
 * @name answerBuilder
 * @description Функция, которая возвращает ответ в стандарте JSON API
 * @param {object} res объект ответа
 * @param {object|Array} d данные в виде списка или объекта
 * @param {Error} e объект ошибки
 * @param {object} m объект мета-данных
 * @param {number} code код ответа
 * @returns
 * @exports 
 */
function answerBuilder(res, d, e, m, code) {
    let data, errors, meta;
    
    if (d) {
        data = Array.isArray(d) ? d : [d];
    } else {
        data = [];
    }

    if (e) {
        errors = Array.isArray(e) ? e : [e];
    } else {
        errors = [];
    }
    
    meta = m ? m : {};

    if (code) {
        return res.status(code).json({ data, errors, meta });
    } else {
        return res.json({ data, errors, meta });
    }
}

module.exports = answerBuilder;