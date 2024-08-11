const http = require("http");

const route = require("./route");
console.log(route);
console.log(route.text);

const server = http.createServer(route.requestHandler);

server.listen(3000);
