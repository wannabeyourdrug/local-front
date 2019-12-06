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
    
    // TODO: требуется дополнить хедеры, если это потребуется
    /* Прописываем стандартные заголовки */
    res.header('Access-Control-Allow-Origin', '*');
    /* Прописываем разрешенные заголовки */
    // TODO: требуется определить, какие заголовки требутся (referrer, x-access-token, Origin, X-Requested-With, Content-Type, Accept, x-language) 
    res.header('Access-Control-Allow-Headers', '');
    /* Прописываем разрешённые методы */
    // TODO: пропишите, какие требуются методы (GET, POST, HEAD, PUT, DELETE, OPTIONS)
    res.header('Access-Control-Allow-Methods', '');
    
    /* Проверяем метод. Если метод - options, то возвращаем удачный ответ */
    if(req.method === 'OPTIONS') {
        res.status(200).json({});
    } else {
        next();
    }
}

 module.exports = cors;