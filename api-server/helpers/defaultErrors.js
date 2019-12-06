/**
 * @function
 * @name defaultErrors
 * @description Функция, которая даёт ответ со стандартными ошибками
 * @param {object} res объект ответа
 * @param {string} code строковой код ошибки
 * @param {object} meta объект мета-данных
 * @returns
 * @exports 
 */
function defaultErrors(res, code, meta) {
    let message;
    let status;
    switch (code) {
        case 'ALREADY_REGISTER':
            message = 'Ошибка. Такой пользователь уже зарегистрирован';
            status = 502;
            break;
        case 'NOT_REGISTER_DATA':
            message = 'Введены не все обязательные поля для регистрации';
            status = 502;
            break;
        case 'NOT_AUTH_DATA':
            message = 'Введены не все обязательные поля для авторизации';
            status = 502;
            break;
        case 'NOT_AUTH':
            message = 'Вы не атворизованы';
            status = 502;
            break;
        case 'USER_NOT_FOUND':
            message = 'Такой пользователь не найден';
            status = 404;
            break;
        case 'CONTRACT_NOT_FOUND':
            message = 'Заказ не найден';
            status = 404;
            break;
        case 'WRONG_PASS':
            message = 'Вы ввели не корректный пароль';
            status = 502;
            break;
        case 'WRONG_TOKEN':
            message = 'Передан не верный токен';
            status = 502;
            break;
        case 'ACCESS_DENIED':
            message = 'У вас не хватает прав для этой операции';
            status = 502;
            break;
        case 'NOT_FOUND':
            message = 'Объект не найден';
            status = 404;
            break;
        case 'BAD_DATA':
            message = 'Неправильные данные запроса';
            status = 400;
            break;
        default:
            message = 'Неизвестная ошибка';
            status = 502;
            break;
    }
    return res.status(status).json({
        data: [],
        errors: [{message}],
        meta
    });
}

module.exports = defaultErrors;