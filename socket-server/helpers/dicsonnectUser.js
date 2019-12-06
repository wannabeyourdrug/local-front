/**
 * @function
 * @name desconnectUser
 * @descrtiption Метод, который вызывается при дисконнекте пользователя
 * @param  {object} isServer экземпляр сокет-сервера
 * @param  {string} id индефикатор пользователя
 * @return {undefined}
 * @exports 
 */
function disconnectUser(ioServer, id) {
	// TODO: допишите хелпер, который сообщает всем пользователям, что пользователь 
	// отключился от сервера
	// Ссылка с примером: https://socket.io/docs/#Server-3
}

module.exports = disconnectUser;
