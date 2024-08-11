const http = require("http");

const route = require("./route");

const server = http.createServer(route.requestHandler);

server.listen(3000);
