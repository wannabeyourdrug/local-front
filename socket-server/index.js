// Прогружаем переменные окружения, необходимо
// для того, чтобы использовать то, что используется в файле
// .env у каждого пользователя
// Документация: https://www.npmjs.com/package/dotenv
require('dotenv').config();

// FIXME: требуется задать port сервера воспользуйтесь переменной, заданной в этом файле.
const port = 3000;
// Получаем экземпляр socket-сервера
const ioServer = require('socket.io').listen(port);

// Получаем экземпляр объекта для запросов
// TODO: прочитайте документацию по библиотеке работы с запросами (https://www.npmjs.com/package/request)
const request = require('request');

// Получаем экземпляр логера
// TODO: прочитайте документацию по логеру winston (https://www.npmjs.com/package/winston)
const winston = require('winston');

// 
// TODO: требуется сделать транспорты для записи в файлы.
// ПРИМЕР КОНФИГА
// ============================================================================================================
// level: 'info',
// format: winston.format.json(),
// defaultMeta: {
//     service: 'server_name'
// },
// transports: [
//      new winston.transports.File({ filename: 'error.log', level: 'error' }), - пишется определённый уровень
//      new winston.transports.File({ filename: 'combined.log' }) - пишутся все уровни (если уровнеь не указан)
// ]
// ============================================================================================================
// 
const logger = winston.createLogger({});

// 
// TODO: задайте уровень логирования в консоле (доп.транспорт) в случае, если сервис работает не врежиме
// production (см. документацию выше)
// 

//
// TODO: подключем хелперы, которые помогут не дублировать код отправки сообщения или получения времени.
// Пример подключения файла
// const getTimeNow = require('./helpers/getTimeNow');
// 
// ОПИСАНИЕ ХЕЛПЕРОВ
// =============================================================================================================
// getTimeNow - хелпер для получения текущего значения времени
// disconnectUser - хелпер, который отвечает при дисконекте
// callAll - хелпер, который позволяет отвечать всем пользователям сразу
// callMe - хелпер, который позволяет отвечат конкретному пользователю
// =============================================================================================================
// 
const getTimeNow = require('./helpers/getTimeNow');
const disconnectUser = require('./helpers/dicsonnectUser');
const callAll = require('./helpers/callAll');
const callMe = require('./helpers/callMe');

// Навешиваем события на коннект
ioServer.sockets.on('connection', (socket) => {
	// Получаем индефикатор сокета
	const id = socket.id.toString;
	// Получаем время установления соединения
	let time = getTimeNow();
	// Определяем переменную для ответа на различные события
	let answer = {
		event: 'connected',
		id,
		time
	};
	// Переменная, содержащая события
	let event;
	// Отправляем клиенту сообщение об удачном соединении с сокет-серверером
	// TODO: тут можно сделать отправку любой полезной информации, вплоть до получения
	// данных для профиля пользователя и т.п. EXTRA
	callMe(socket, answer, logger);
	// Сообщаем всем пользователям, что подключился новый клиент
	answer = {
		event: 'userJoined',
		id,
		time
	};

	// Подписываемся на события открытого сокета
	// Подписываемся на событие отправки/получения сообщения
	// TODO: требуется реализовать callback-функцию, которая сделает запросна сервер и обработает 2 основные ситуации
	// 0. Ошибку запроса (не предвиденный ответ сервера)
	// 1. Корректное поведение. 
	// Если поведение было корретным (т.к. отыграл пункт 1) - нужно понять какого типа действие на сервери вызывалось.
	// И исходя от этого действия

	socket.on('message', (obj) => {
		// Получаем текущее время
		time = getTimeNow();
		// Выделаем из объекта запроса собственно запрос на сервер и тип запроса (для отправки sent, для получения get)
		// и делаем запрос на сервер API
		const {
			req,
			type
		} = obj;
		// Выполняем запрос на API сервер
		request(req, (error, response, body) => {
			// Если ошибка - отвечаем ошибкой
			if (error) {
				event = 'Error';
				const message = 'Server error';
				answer = {
					event,
					id,
					time,
					message,
					error,
					body,
					response
				};
				callMe(socket, answer, logger);
			} else {
				switch (type) {
					case 'sent':
						event = 'sent';
						const message = 'Sent Message';
						answer = {
							event,
							id,
							time,
							message,
							error,
							body,
							response
						};
						callAll(socket, answer, logger);
						break;
					case 'get':
						event = 'get';
						const message = 'Got Messages';
						answer = {
							event,
							id,
							time,
							message,
							error,
							body,
							response
						};
						callMe(socket, answer, logger);
						break;
					default:
						event = 'Error';
						const message = 'Not correct type';
						answer = {
							event,
							id,
							time,
							message,
							error,
							body,
							response
						};
						callMe(socket, answer, logger);
						break;
				}
			}
		});
	});
	// Подписываемся на событие запроса с API-сервера
	// ИДЕЯ: нам нужно API для socket-соединения, которое будет просто "проксировать" реальное API, превращая любое API в real time.
	// TODO: требуется сделать запрос и сообщить результат клиенту
	socket.on('api', (req) => {
		// Выполняем запрос
		request(req, (error, response, body) => {
			// TODO: Код обоработки запроса
			if (error) {
				event = 'Error';
				const message = 'Server error';
				answer = {
					event,
					id,
					time,
					message,
					error,
					body,
					response
				};
				callMe(socket, answer, logger);
			} else {
				event = 'getApi';
				const message = 'Got Result';
				answer = {
					event,
					id,
					time,
					message,
					body,
					response
				};
				callMe(socket, answer, logger);
			}
		});
	});

	// Подписываемся на событие оповещения (т.е. наш сервер что-то сообщает в клиенту/ам)
	socket.on('alerts', (req) => {
		// Получаем из данных объекта - куда планируется отправить сообщение
		const {
			target
		} = req;
		// Получаем сообщение, которое требуется отправить
		let message = (req.hasOwnProperty('message')) ? req.message : '';
		// Задаём переменную функции
		let fn;
		// Получаем текущее время
		time = getTimeNow();
		// В зависимости от назначения (me - только для одного пользователя, all - для нескольких пользователей)
		// отправляем оповещение. Предполагается для первой версии реализовать оповещения работы  с API на уровне
		// проксирования фронтом.
		// TODO: требуется прописать реакции на разный target по описанной выше схеме.
		switch (target) {
			case "me":
				event = 'me';
				message = `Message for one person: (${target})`;
				answer = {
					event,
					id,
					time,
					message,
					target
				};
				fn = callMe;
				break;
			case "all":
				event = 'all';
				message = `Message for all: (${target})`;
				answer = {
					event,
					id,
					time,
					message,
					target
				};
				fn = callAll;
				break;
			default:
				event = 'error';
				message = `Not correct target: ${target}`;
				answer = {
					event,
					id,
					time,
					message
				};
				fn = callMe;
				break;
		}
		// Посылаем ответ
		fn(socket, answer, logger);
	});
	// Определяем действия, если пользователь отключился (произошел дисконект)
	socket.on('disconnect', () => {
		disconnectUser(ioServer, id);
	});
});