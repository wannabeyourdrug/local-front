import io from './io' ;

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
    let req = {
        url: '/api/' + model,
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    };
    if (['POST', 'PUT'].includes(method)) {
        req.body = JSON.stringify(data);
    }

    io.
}