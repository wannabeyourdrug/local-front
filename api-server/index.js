/**  
 * Прогружаем переменные окружения, необходимо
 * для того, чтобы использовать то, что используется в файле
 * .env у каждого пользователя
 * Документация: https://www.npmjs.com/package/dotenv
 */
require('dotenv').config()

/** 
 * Импортируем все бибилиотеки, которые необходимы для работы с сервером 
 * Документация:
 * 0. ExpressJS: https://expressjs.com
 * 1. Body-parser (middleware): https://www.npmjs.com/package/body-parser
 * 2. Winston (logger): https://www.npmjs.com/package/winston
 * 3. Mongoose (ODM):https://mongoosejs.com
 */
const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const mongoose = require('mongoose');

/** 
 * TODO: прогрузим middleware-функциидля контроля доступа и CORS
 * ПРИМЕР:
 * const accessControl = require('./middlewares/accessControl');
 */
const accessControl;
const cors;

/** Создаем экземпляр веб-сервера */
const app = express();
/** Получаем из глобальных настроек окружения порт */
const port = parseInt(process.env.PORT);

/** 
 * TODO: Аналогично, подключаем роутинг
 */
const router;

/**
 * 
 * TODO: требуется сделать транспорты для записи в файлы.
 * ПРИМЕР КОНФИГА
 * ============================================================================================================
 * level: 'info',
 * format: winston.format.json(),
 * defaultMeta: {
 *     service: 'server_name'
 * },
 * transports: [
 *      new winston.transports.File({ filename: 'error.log', level: 'error' }), - пишется определённый уровень
 *      new winston.transports.File({ filename: 'combined.log' }) - пишутся все уровни (если уровнеь не указан)
 * ]
 * ============================================================================================================
 * 
 */
const logger = winston.createLogger({});

// 
// TODO: задайте уровень логирования в консоле (доп.транспорт) в случае, если сервис работает не врежиме
// production (см. документацию выше)
//

/** 
 * TODO: подключаемся к БД с помощью переменной из proccess.env вместо строки
 * НАПРИМЕР: process.env.MONGO_URL.
 * Вторым параметром тербуется передать конфигуркцию для актуальной версии mongoose (в теории можно без неё):
 * {
 *    useNewUrlParser: true,
 *    useUnifiedTopology: true
 * }
 */
mongoose.connect('mongodb://localhost:27017/blackout');

/** Подписываемся на событие ошибок соединения */
mongoose.connection.on('error', (error) => {
  // TODO: кидаем ошибку в логер
});

/**
 * Подключаемы возможность работы с телом запроса, сразу преобразуем к JSON
 */
app.use(bodyParser.json());

/** 
 * TODO: подключить middleware-функции (cors, accessControl). 
 * ПРИМЕР:
 * app.use(cors);
 */

/** 
 * Подключаем роутер
 */
app.use('/api', router);

/** Слушаем сервер и порт */
app.listen(port, () => {
  // TODO: выводил лог с сообщением, что сервер запущен на порту и его слушают
});