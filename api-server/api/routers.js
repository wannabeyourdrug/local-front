/**  Подключаем ExpressJS */
const express = require('express');

/** Получаем экземпляр объекта роутинга */
const router = express.Router();


/** 
 * Маршрут для проверки работоспособности сервера
 */
const checkHealth = require('./system/checkHealth');
router.all('/health', checkHealth);

const getTagsList = require('./tags/getTagsList');
const createTag = require('./tags/createTag');
const updateTag = require('./tags/updateTag');
const removeTag = require('./tags/removeTag');
router.get('/tags', getTagsList);
router.post('/tags', createTag);
router.put('/tags', updateTag);
router.delete('/tags', removeTag);

const getMessageList = require('./messages/getMessageList');
const createMessage = require('./messages/createMessage');
const updateMessage = require('./messages/updateMessage');
router.get('/messages', getMessageList);
router.post('/messages', createMessage);
router.put('/messages/:id', updateMessage);

const getChatsList = require('./chats/getChatsList');
const createChat = require('./chats/createChat');
const updateChat = require('./chats/updateChat');
router.get('/chats', getChatsList);
router.post('/chats', createChat);
router.put('/chats/:id', updateChat);

const getUserList = require('./users/getUserList');
const updateUser = require('./users/updateUser');
router.get('/users', getUserList);
router.put('/users/:id', updateUser);

const login = require('./auth/login');
const logout = require('./auth/logout');
router.post('/login', login);
router.all('/logout', logout);

module.exports = router;