/**
 * @function
 * @name callMe
 * @description Функция, которая отправляет сообщение текущему пользователю
 * @param  {object} socket экземпляр сокет-соединения
 * @param  {object} answer ответ, который необходимо отправить
 * @param  {object} logger логер для вывода в консоль 
 * @return {undefined}
 * @exports
 */
function callMe(socket, answer, logger) {
	// TODO: требуется дописал хелпер, который сообщает конкретному пользователя какое-то событие
	// Ссылка на документацию: https://socket.io/docs/client-api/#socket-connect
	// Так же, если не переданы какие-то нужные параметры надо вызвать ошибку (вывести её хотя бы
	// в консоль)
}

module.exports = callMe;