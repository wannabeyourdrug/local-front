/** 
 * @function
 * @name cors
 * @description Функция, которая реализуеи возможность CORS
 * @param  {object}   req  объект запроса
 * @param  {object}   res  объект ответа
 * @param  {Function} next функция исполнения дальнейшего кода
 * @return {undefined}
 * @exports
 */
function cors(req, res, next) {
    /* Прописываем стандартные заголовки */
    res.header('Access-Control-Allow-Origin', '*');
    /* Прописываем разрешенные заголовки */
    res.header('Access-Control-Allow-Headers', 'referrer, x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-language, Authorization');
    /* Прописываем разрешённые методы */
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, PUT, DELETE, OPTIONS');
    
    /* Проверяем метод. Если метод - options, то возвращаем удачный ответ */
    if(req.method === 'OPTIONS' || req.method === 'options') {
        res.status(200).json({});
    } else {
        next();
    }
}

 module.exports = cors;