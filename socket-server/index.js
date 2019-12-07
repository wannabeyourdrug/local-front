// Прогружаем переменные окружения, необходимо
// для того, чтобы использовать то, что используется в файле
// .env у каждого пользователя
// Документация: https://www.npmjs.com/package/dotenv
require('dotenv').config();

const port = parseInt(process.env.PORT);
// Получаем экземпляр socket-сервера
const ioServer = require('socket.io').listen(port);

const request = require('request');

const winston = require('winston');

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
	callMe(socket, answer, logger);
	// Сообщаем всем пользователям, что подключился новый клиент
	answer = {
		event: 'userJoined',
		id,
		time
	};

	socket.on('message', (obj) => {
		let message = ' ';
		// Получаем текущее время
		time = getTimeNow();
		// Выделаем из объекта запроса собственно запрос на сервер и тип запроса (для отправки sent, для получения get)
		// и делаем запрос на сервер API
		const {
			req,
			type
		} = JSON.parse(obj);
		console.log(obj);
		// Выполняем запрос на API сервер
		try {
			request(req, (error, response, body) => {
				// Если ошибка - отвечаем ошибкой
				if (error) {
					event = 'Error';
					message = 'Server error';
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
							message = 'Sent Message';
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
							message = 'Got Messages';
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
							message = 'Not correct type';
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
		} catch (e) {
			console.log(e);
		}
	});

	// Подписываемся на событие запроса с API-сервера
	// ИДЕЯ: нам нужно API для socket-соединения, которое будет просто "проксировать" реальное API, превращая любое API в real time.
	socket.on('api', (req) => {
		let message = ' ';
		// Выполняем запрос
		request(req, (error, response, body) => {
			if (error) {
				event = 'Error';
				message = 'Server error';
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
				message = 'Got Result';
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