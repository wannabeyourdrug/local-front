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
    const body = req.body;

    // TODO: требуется получить данные из тела запроса (имя пользователя, действие, которое требуется вполнить)
    // НАПРИМЕР
    // const username = (body.hasOwnProperty('username')) ? body.username : undefined;
    // const action = (body.hasOwnProperty('action')) ? body.action : undefined;
    
    // Получаем объект мета-данных
    const meta = buildMeta(req);
    
    // TOOD: Проверяем наличие авторизационного токена СБИС. Пока он нам нужен только для упрощения
    const sbisToken = (body.hasOwnProperty('sbisToken')) 
                ? req.body.sbisToken 
                : undefined;

    // TODO: Записываем авторизационный токен СБИС в мета-объект (понадобится фронтенду)
    // TODO: Провести проверку на наличие токена СБИС и если токена нет - выводить ошибку. Если токен
    // присутствует в данных (был отправлен с фронта) - выполнить одно из действий
    if (sbisToken) {
        // TODO: Используем паттерн "стратегия". Требуется реализовать действие авторизации и регистрации.
        // Второй вариант - если нейдствие не передано или переданно не корректное имя действия - требуется 
        // вернуть ошибку.
        switch (action) { 
            case '':
                break;
            case '':
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