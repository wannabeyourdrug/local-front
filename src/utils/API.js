import {
    apiUrl
} from '../constants/config'

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
export default async function api(method, model, data = {}) {
    let url = apiUrl + '/' + model;
    let req = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    };
    if (['POST', 'PUT'].includes(method)) {
        req.body = JSON.stringify(data);
    }

    let response = await fetch(url, req);
    let result = await response.json();
    return result.data;
}