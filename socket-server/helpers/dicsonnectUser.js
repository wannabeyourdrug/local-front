const getTimeNow = require('./getTimeNow');

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
	ioServer.emit('disconnected', { id, time: getTimeNow()});
}

module.exports = disconnectUser;
