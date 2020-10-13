const app = require('./app');
const config = require('./config');
const http = require('http');


const server = http.createServer(app);


const PORT = config.PORT;

server.listen(PORT, ()=> console.log(`Server started on PORT: ${PORT}`))