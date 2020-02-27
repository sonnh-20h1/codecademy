//Define dependences
const http = require('http');
const app = require('./app');
const config = require('./config');

//Define PORT
// const port = process.env.PORT || 5555;

//Create a Server 
const server = http.createServer(app);

//Listen a port ??
server.listen(config.WEB_PORT);
