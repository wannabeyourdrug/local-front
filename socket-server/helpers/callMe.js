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
	try {
		socket.emit(answer.event, { data: answer });
	} catch (e) {
		logger.error(e);
	}

}

module.exports = callMe;