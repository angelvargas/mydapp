const http = require("http");
const app = require("./sections/app");
const hostname = '127.0.0.1';
const port = process.env.port || 3002;
const server = http.createServer(app);
//server.listen(port);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});