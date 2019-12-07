/**
 * @function
 * @name getTimeNow
 * @description Функция, которая возвращает текущее время в виде строки
 * @return {string} Текущее время в виде строки 
 * @exports
 */
function getTimeNow() {
	return (new Date()).toLocaleDateString()
}

module.exports = getTimeNow;