import socket from './io';

// TODO: get token from store
const token = '';

/**
 * @function
 * @name api
 * @description easy work with api
 * @param method request method, one of GET, POST, PUT, DELETE
 * @param model model to request
 * @param data data to post
 * @export
 * @async
 */
export default async function api(method, model, data) {
    return new Promise((resolve, reject) => {
        let req = {
            uri: 'http://127.0.0.1:80/api/' + model,
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        };
        if (['POST', 'PUT'].includes(method)) {
            req.body = JSON.stringify(data);
        }
    
        socket.emit('api', req, (res) => {
            resolve(res);
        });
    });
}