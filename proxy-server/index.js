const http = require('http');
const https = require('https');
const port = 5000;

const Iconv = require('iconv').Iconv;
const conv = Iconv('windows-1251', 'utf8');

const requestHandler = (request, response) => {
    if (request.method == 'POST' && request.headers.sbistoken) {
        let postData = JSON.stringify({
            "id": 1,
            "jsonrpc": "2.0",
            "method": "User.GetCurrentUserInfo",
            "params": {},
            "protocol": 5
        });
        let req = https.request('https://fix-online.sbis.ru/service/?srv=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-SBISAccessToken': request.headers.sbistoken
            }
        }, (res) => {
            let body = '';
            res.on('data', (chunk) => {
                body += conv.convert(chunk).toString();
            });
            res.on('end', () => {
                response.end(body);
            });
        });

        req.on('error', (e) => console.log);

        req.write(postData);
        req.end();
    } else {
        response.end('');
    }
}

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})