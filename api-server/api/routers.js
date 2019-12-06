/**  Подключаем ExpressJS */
const express = require('express');

/** Получаем экземпляр объекта роутинга */
const router = express.Router();


/** 
 * Маршрут для проверки работоспособности сервера
 */
const checkHealth = require('./system/checkHealth');
router.all('/health', checkHealth);

/** 
 * Маршруты для работы с тегами
 * TODO: подключаем аналогично проверки работоспособности
 * TODO: для того, чтобы написать CRUD-операции дальше изучить заготовки API, которые лежат в каталоге tags
 */
const getTagsList;
const createTag;
const updateTag;
const removeTag;
router.get('/tags', getTagsList);
router.post('/tags', createTag);
router.put('/tags', updateTag);
router.delete('/tags', removeTag);

/** 
 * Маршруты для работы с сообщениями
 * TODO: требуется подключить функции, реализующие операции над сообщениями (create, update, list)
 * TODO: требуется прописать пути маршрута и методы (аналогично тегам, методы post, put, get)
 * TODO: для обновления сообщения использовать маршрут с req.params
 * Документация: https://expressjs.com/ru/api.html
 * Пример маршрута с params: '/tags/:id'
 */
const getMessageList;
const createMessage;
const updateMessage;

/** 
 * Маршруты для работы с чатами
 * TODO: требуется подключить функции, реализующие операции над чатами (create, update, list)
 * TODO: требуется прописать пути маршрута и методы (аналогично тегам, методы post, put, get)
 * TODO: для обновления сообщения использовать маршрут с req.params
 */
const getChatsList;
const createChat;
const updateChat;

/** 
 * Маршруты для работы с пользователям
 * TODO: требуется подключить функции, реализующие операции над чатами (update, list)
 * TODO: требуется прописать пути маршрута и методы (аналогично тегам, методы put, get)
 * TODO: для обновления сообщения использовать маршрут с req.params
 */
const getUserList;
const updateUser;

/** 
 * Маршруты для аутифенкации/регистрации
 * TODO: требуется написать роут для logout (функция выхода). Он должен быть доступен на всех методах и всегда возвращать ответ
 * TODO: требуется написать роут для авторизации пользователя. Считаем, что пользователь получает данные из СБИС и, если он не был
 * ранее зарегистрирован - регистрируется.
 */
const login;
const logout;

module.exports = router;