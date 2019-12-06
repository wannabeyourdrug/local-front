/**
 * @function
 * @name callAll
 * @description Функция оповещения всех пользователей
 * @param  {object} socket экземпляр socket-соединения
 * @param  {object} answer объект, который необходимо передать
 * @param  {object} logger логер для вывода в консоль
 * @return {undefined} функция ничего не позвращает
 * @exports
 */
function callAll(socket, answer, logger) {
	// TODO: требуется сделать функция, которая отправлет оповещение всем 
	// пользователям, подключенным к socket-серверу
	// Ответ как это сделать можно найти в этой документации: https://socket.io/docs/#Server-3
	// или на этом обсуждении https://stackoverflow.com/questions/10058226/send-response-to-all-clients-except-sender 
}

module.exports = callAll;