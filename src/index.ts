// const http = require('http')

// const server = http.createServer(async (req, res) => {
//     if(req.method === 'GET' && req.url === '/') {
//         res.statusCode = 200
//         console.log('hello from server');
//         res.end()
//     }
// })

// server.listen(3001, () => {
//     console.log('server on http://localhost:3001');
// })

import app from './server';

app.listen(3001, () => {
    console.log('listen on http://localhost:3001');
})