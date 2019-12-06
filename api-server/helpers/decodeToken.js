const jwt = require('jsonwebtoken');

/**
 * @function
 * @name decodeToken
 * @description Функция, которая декодирует токен и возвращает результат
 * @param {string} token токен
 * @returns {Promise<object>} обещание декодирования
 * @exports 
 */
function decodeToken(token) {
    return new Promise((resolve, reject) => {
       jwt.verify(token, process.env.SALT, (error, decoded) => {
          if (error) {
             reject(error);
          } else {
             resolve(decoded);
          }
       });
    });
 }

 module.exports = decodeToken;