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

const accessControl = require('./middlewares/accessControl');
const cors = require('./middlewares/cors');

/** Создаем экземпляр веб-сервера */
const app = express();
/** Получаем из глобальных настроек окружения порт */
const port = parseInt(process.env.PORT);

const router = require('./api/routers');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'api-service'
  },
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'combined.log'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/** Подписываемся на событие ошибок соединения */
mongoose.connection.on('error', (error) => {
  logger.error(error);
});

/**
 * Подключаемы возможность работы с телом запроса, сразу преобразуем к JSON
 */
app.use(bodyParser.json());

app.use(accessControl);
app.use(cors);

/** 
 * Подключаем роутер
 */
app.use('/api', router);

/** Слушаем сервер и порт */
app.listen(port, () => {
  logger.info('Listening on ' + port);
});